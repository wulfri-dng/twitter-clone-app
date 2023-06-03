import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
    try {
        let tweetList = await db.collection("tweet_feed");
        let tweetResults = await tweetList.find({}).toArray();

        let userList = await db.collection("users");
        let userResults = await userList.find({}).toArray();

        for (const tweet of tweetResults) {
            for (const user of userResults) {
                if (tweet.userId === user._id.toString()) {
                    tweet.userName = user.userName;
                    tweet.name = user.name;
                    break
                }
            }
        }

        res.send(tweetResults).status(200);
    } catch (err) {
        console.log(err)
    }
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
    try {
        let collection = await db.collection("records");
        let query = { _id: new ObjectId(req.params.id) };
        let result = await collection.findOne(query);

        if (!result) res.send("Not found").status(404);
        else res.send(result).status(200);
    } catch (err) {
        console.log(err)
    }
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        };
        let collection = await db.collection("records");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.log(err)
    }
});

// Publish tweet and update user profile tweet field
router.post("/publishTweet", async (req, res) => {
    try {
        const newDocument = {
            userId: req.body.userId,
            dateTime: req.body.dateTime,
            content: req.body.content,
            likeCount: 0,
            viewCount: 0,
            comments: [],
        };
        const collection = await db.collection("tweet_feed");
        const publishedTweetResult = await collection.insertOne(newDocument);

        const usersCollection = await db.collection("users");
        const query = { _id: new ObjectId(req.body.userId) }
        const userDoc = await usersCollection.find(query).toArray()

        if (userDoc.length === 1) {
            const updateUserResult = await usersCollection.updateOne(query, {
                $push: { tweets: publishedTweetResult.insertedId }
            })

            res.send({ publishedTweetResult: publishedTweetResult, updateUserResult: updateUserResult }).status(204);
        } else if (userDoc.length > 1) {
            res.send({ error: "Multiple users found; Tweet published", publishedTweetResult: publishedTweetResult }).status(204);
        } else {
            res.send({ error: "User not found; Tweet published", publishedTweetResult: publishedTweetResult }).status(204);
        }
    } catch (err) {
        console.log(err)
    }
});

// Like the tweet
router.post("/likeTweet", async (req, res) => {
    try {
        const usersCollection = await db.collection("users");
        const userDataQuery = { _id: new ObjectId(req.body.likedUserId) };
        let userResult = await usersCollection.findOne(userDataQuery);

        if (userResult?.likedTweets.includes(req.body.tweetId)) {
            res.send("Error occurred").status(200)
        } else {
            const tweetFeedQuery = { _id: new ObjectId(req.body.tweetId) };

            let tweetsCollection = await db.collection("tweet_feed");
            let updatedTweetResult = await tweetsCollection.updateOne(tweetFeedQuery, {
                $inc: { likeCount: 1 }
            });

            await usersCollection.updateOne(userDataQuery, {
                $push: { likedTweets: req.body.tweetId }
            })

            res.send(updatedTweetResult).status(200);
        }
    } catch (err) {
        console.log(err)
    }
})

// Dislike the tweet
router.post("/dislikeTweet", async (req, res) => {
    try {
        const usersCollection = await db.collection("users");
        const userDataQuery = { _id: new ObjectId(req.body.dislikedUserId) };
        let userResult = await usersCollection.findOne(userDataQuery);

        if (userResult?.likedTweets.includes(req.body.tweetId)) {
            const tweetFeedQuery = { _id: new ObjectId(req.body.tweetId) };

            let tweetsCollection = await db.collection("tweet_feed");
            let updatedTweetResult = await tweetsCollection.updateOne(tweetFeedQuery, {
                $inc: { likeCount: -1 }
            });

            await usersCollection.updateOne(userDataQuery, {
                $pull: { likedTweets: req.body.tweetId }
            })

            res.send(updatedTweetResult).status(200);
        } else {
            res.send("Error occurred").status(200)
        }
    } catch (err) {
        console.log(err)
    }
})

// Login user
router.post("/userLogin", async (req, res) => {
    try {
        const usersCollection = await db.collection("users");
        const query = { username: req.body.username }
        let fetchedUser = await usersCollection.findOne(query);

        if (fetchedUser?.password && fetchedUser.password === req.body.password) {
            res.send(fetchedUser).status(200)
        } else {
            res.send({ err: true, errMsg: "Check details and try again" }).status(200)
        }
    } catch (err) {
        console.log(err)
    }
});

// Register new user
router.post("/registerUser", async (req, res) => {
    try {
        const userBirthday = new Date(Number(req.body.year), Number(req.body.month) - 1, Number(req.body.date) + 1)

        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            birthday: userBirthday,
            tweets: [],
            likedTweets: []
        };

        const usersCollection = await db.collection("users");
        const query = { username: req.body.username }
        const userDoc = await usersCollection.find(query).toArray()

        if (userDoc.length > 0) {
            res.send({ err: true, errMsg: "Entered username already exists" }).status(200);
        } else {
            const registeredNewUser = await usersCollection.insertOne(newUser);

            if (registeredNewUser.acknowledged && registeredNewUser.insertedId) {
                let query = { _id: new ObjectId(registeredNewUser.insertedId) };
                let result = await usersCollection.findOne(query);
                res.send(result).status(200);
            } else {
                res.send({ err: true, errMsg: "Something went wrong" }).status(200);

            }

        }
    } catch (err) {
        console.log(err)
    }
});

// // This section will help you update a record by id.
// router.patch("/:id", async (req, res) => {
//     try {
//         const query = { _id: new ObjectId(req.params.id) };
//         const updates = {
//             $set: {
//                 name: req.body.name,
//                 position: req.body.position,
//                 level: req.body.level
//             }
//         };

//         let collection = await db.collection("records");
//         let result = await collection.updateOne(query, updates);

//         res.send(result).status(200);
//     } catch (err) {
//         console.log(err)
//     }
// });

// // This section will help you delete a record
// router.delete("/:id", async (req, res) => {
//     try {
//         const query = { _id: new ObjectId(req.params.id) };

//         const collection = db.collection("records");
//         let result = await collection.deleteOne(query);

//         res.send(result).status(200);
//     } catch (err) {
//         console.log(err)
//     }
// });

export default router;