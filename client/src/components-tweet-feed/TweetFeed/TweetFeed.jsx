import styled from 'styled-components';
import axios from 'axios';
import { Tweet } from '../Tweet/Tweet';
import { useEffect, useState } from 'react';
import { Modal } from '../../shared';
import { UnauthorizedLikeClickPopup } from '../UnauthorizedLikeClickPopup/UnauthorizedLikeClickPopup';

const FeedList = styled.div`
    color: white;
`;

export const TweetFeed = () => {
    const [tweetList, setTweetList] = useState([]);
    const [isUnauthorizedLikePopupVisible, setIsUnauthorizedLikePopupVisible] =
        useState(false);

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

    const onClickOutside = () => setIsUnauthorizedLikePopupVisible(false);

    return (
        <>
            <FeedList>
                {tweetList.map((tweet, index) => {
                    return (
                        <Tweet
                            key={index}
                            tweet={tweet}
                            setIsUnauthorizedLikePopupVisible={
                                setIsUnauthorizedLikePopupVisible
                            }
                        />
                    );
                })}
                {isUnauthorizedLikePopupVisible && (
                    <Modal onClickOutside={onClickOutside}>
                        <UnauthorizedLikeClickPopup />
                    </Modal>
                )}
            </FeedList>
        </>
    );
};
