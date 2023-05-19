import styled from "styled-components"
import profilePic from "../../images/danushanavod.jpg"

const FeedList = styled.div`
    color: white;
`

const Tweet = styled.div`
    display: flex;
    margin: 12px 18px;

    .details-area {
        width: 100%;
        font-weight: 400;
    }

    .top-details-section {
        display: flex;
    }

    .image-area {
        margin-right: 14px;
    }

    .user-dp {
        max-width: 48px;
        border-radius: 50px;
       
    }

    .faded-text {
        margin: 0 5px;
        font-weight: 400;
        color: #70767A;
    }

    .top-details-section-divider {
        margin: 0px;
        font-weight: 600;
    }

    .text-content {
        margin-top: 5px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        letter-spacing: 0.6px;
        font-size: 0.9em;
        line-height: 20px;
    }
`

export const Feed = () => {
    const feedTweetsList = [
        {
            userName: "danushanavod",
            name: "Danusha Navod",
            profilePic: "../../images/danushanavod.jpg",
            dateTime: "May 17",
            content: "The 75,000,000 great American Patriots who voted for me, AMERICA FIRST, and MAKE AMERICA GREAT AGAIN, will have a GIANT VOICE long into the future. They will not be disrespected or treated unfairly in any way, shape or form!!!",
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
        <FeedList>
            {feedTweetsList.map(tweet => {
                console.log(tweet.profilePic)

                return (
                    <Tweet>
                        <div className="image-area">
                            <img className="user-dp" src={profilePic} alt={`${tweet.userName}-dp`}></img>
                        </div>
                        <div className="details-area">
                            <div className="top-details-section">
                                <p>{tweet.name}</p>
                                <p className="faded-text">@{tweet.userName}</p>
                                <p className="faded-text top-details-section-divider">·</p>
                                <p className="faded-text dateTime">{tweet.dateTime}</p>
                            </div>
                            <p className="text-content">{tweet.content}</p>
                        </div>
                    </Tweet>

                )
            })}
        </FeedList >
    )
}