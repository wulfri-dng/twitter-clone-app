import styled from 'styled-components';
import axios from 'axios';
import { Tweet } from '../Tweet/Tweet';
import { useEffect, useState } from 'react';

const FeedList = styled.div`
    color: white;
`;

export const TweetFeed = () => {
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

    return (
        <FeedList>
            {tweetList.map((tweet, index) => {
                return <Tweet key={index} tweet={tweet} />;
            })}
        </FeedList>
    );
};
