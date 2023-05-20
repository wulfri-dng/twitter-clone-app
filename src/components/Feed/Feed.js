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
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }

    .bottom-control-area svg {
        fill: #70767A;
        width: 19px
    }

    .bottom-icon {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        letter-spacing: 0.6px;
        display: flex;
        alignItems: center;
        justify-content: center;
        color: #70767A;
    }

    .bottom-icon svg {
        margin-right: 12px;
    }

    .bottom-icon p {
        font-size: 14px;
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
                                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                                    </svg>
                                    <p>4,481</p>
                                </div>
                                <div className="bottom-icon">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                                    </svg>
                                    <p>4,481</p>
                                </div>
                                <div className="bottom-icon">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                                    </svg>
                                    <p>4,481</p>
                                </div>
                                <div className="bottom-icon">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M17 4c-1.1 0-2 .9-2 2 0 .33.08.65.22.92C15.56 7.56 16.23 8 17 8c1.1 0 2-.9 2-2s-.9-2-2-2zm-4 2c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4c-1.17 0-2.22-.5-2.95-1.3l-4.16 2.37c.07.3.11.61.11.93s-.04.63-.11.93l4.16 2.37c.73-.8 1.78-1.3 2.95-1.3 2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-.32.04-.63.11-.93L8.95 14.7C8.22 15.5 7.17 16 6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.17 0 2.22.5 2.95 1.3l4.16-2.37c-.07-.3-.11-.61-.11-.93zm-7 4c-1.1 0-2 .9-2 2s.9 2 2 2c.77 0 1.44-.44 1.78-1.08.14-.27.22-.59.22-.92s-.08-.65-.22-.92C7.44 10.44 6.77 10 6 10zm11 6c-.77 0-1.44.44-1.78 1.08-.14.27-.22.59-.22.92 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Tweet>

                )
            })}
        </FeedList >
    )
}