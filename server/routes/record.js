import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
    try {
        let collection = await db.collection("tweet_feed");
        let results = await collection.find({}).toArray();
        res.send(results).status(200);
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
            userName: req.body.userName,
            name: req.body.name,
            profilePic: req.body.profilePic,
            dateTime: req.body.dateTime,
            content: req.body.content,
            likeCount: 0,
            viewCount: 0,
            comments: [],
        };
        const collection = await db.collection("tweet_feed");
        const publishedTweetResult = await collection.insertOne(newDocument);

        const usersCollection = await db.collection("users");
        const query = { userName: req.body.userName }
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
        const query = { _id: new ObjectId(req.body.id) };
        const updates = {
            $inc: { likeCount: 1 }
        };

        let collection = await db.collection("tweet_feed");
        let result = await collection.updateOne(query, updates);

        res.send(result).status(200);
    } catch (err) {
        console.log(err)
    }
})

// Dislike the tweet
router.post("/dislikeTweet", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.body.id) };
        const updates = {
            $inc: { likeCount: -1 }
        };

        let collection = await db.collection("tweet_feed");
        let result = await collection.updateOne(query, updates);

        res.send(result).status(200);
    } catch (err) {
        console.log(err)
    }
})

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                name: req.body.name,
                position: req.body.position,
                level: req.body.level
            }
        };

        let collection = await db.collection("records");
        let result = await collection.updateOne(query, updates);

        res.send(result).status(200);
    } catch (err) {
        console.log(err)
    }
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };

        const collection = db.collection("records");
        let result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (err) {
        console.log(err)
    }
});

export default router;