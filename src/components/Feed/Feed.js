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

    .bottom-control-area {
        display: flex;
        justify-content: space-between;
    }

    .bottom-control-area svg {
        fill: #70767A;
        width: 21px
    }

    .bottom-icon {
        display: flex;
        alignItems: center;
        justify-content: center;
        color: #70767A;
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
                            <div className="bottom-control-area">
                                <div className="bottom-icon">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                                    </svg>
                                    <p>4,481</p>
                                </div>
                                <div className="bottom-icon">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                                    </svg>
                                    <p>4,481</p>
                                </div>
                                <div className="bottom-icon">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                                    </svg>
                                    <p>4,481</p>
                                </div>
                                <div className="bottom-icon">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                                    </svg>
                                    <p>4,481</p>
                                </div>
                                <div className="bottom-icon">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                                    </svg>
                                    <p>4,481</p>
                                </div>
                            </div>
                        </div>
                    </Tweet>

                )
            })}
        </FeedList >
    )
}