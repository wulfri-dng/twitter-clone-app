import styled from 'styled-components';
import axios from 'axios';
import { Tweet } from '../Tweet/Tweet';
import { useEffect, useState } from 'react';
import { Modal } from '../../shared';
import { UnauthorizedClickPopup } from '../UnauthorizedClickPopup/UnauthorizedClickPopup';
import { useContext } from 'react';
import { MainContext } from '../../context/mainContext';

const FeedList = styled.div`
    color: white;
`;

export const TweetFeed = () => {
    const contextData = useContext(MainContext);
    const [tweetList, setTweetList] = useState([]);

    useEffect(() => {
        try {
            axios.get('api').then((response) => {
                if (response?.data) {
                    setTweetList(response.data);
                }
            });
        } catch (err) {
            console.log(err);
        }
    }, []);

    const onClickOutside = () =>
        contextData.setUnauthorizedLikePopupVisibility((prev) => {
            return {
                ...prev,
                commentPopup: false,
                retweetPopup: false,
                likePopup: false,
            };
        });

    return (
        <>
            <FeedList>
                {tweetList.map((tweet, index) => {
                    return (
                        <Tweet
                            key={index}
                            tweet={tweet}
                            setUnauthorizedLikePopupVisibility={
                                contextData.setUnauthorizedLikePopupVisibility
                            }
                        />
                    );
                })}
                {contextData.unauthorizedLikePopupVisibility.commentPopup && (
                    <Modal onClickOutside={onClickOutside}>
                        <UnauthorizedClickPopup popupType={'comment'} />
                    </Modal>
                )}
                {contextData.unauthorizedLikePopupVisibility.retweetPopup && (
                    <Modal onClickOutside={onClickOutside}>
                        <UnauthorizedClickPopup popupType={'retweet'} />
                    </Modal>
                )}
                {contextData.unauthorizedLikePopupVisibility.likePopup && (
                    <Modal onClickOutside={onClickOutside}>
                        <UnauthorizedClickPopup popupType={'like'} />
                    </Modal>
                )}
            </FeedList>
        </>
    );
};
