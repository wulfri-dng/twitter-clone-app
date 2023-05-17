import profilePic from "../../images/danushanavod.jpg"

export const Feed = () => {
    const feedTweetsList = [
        {
            userName: "danushanavod",
            name: "Danusha Navod",
            profilePic: "../../images/danushanavod.jpg",
            dateTime: "May 17",
            content: "World Rugby suspends Sri Lanka",
            media: [],
            comments: [
                {
                    userName: "Heshanka_",
                    name: "Heshanka Fernando",
                    profilePic: "",
                    comment: "Failure after failure. This ends soon.",
                    dateTime: "4h"
                }
            ]
        }
    ]

    return (
        <>
            {feedTweetsList.map(tweet => {
                console.log(tweet.profilePic)

                return (
                    <img src={profilePic} alt="Girl in a jacket" width="100" height="80"></img>
                )
            })}
        </>
    )
}