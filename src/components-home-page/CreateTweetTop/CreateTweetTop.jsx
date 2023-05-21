import styled from 'styled-components';
import { TweetForm } from '../../components-tweet-feed';

const Container = styled.div`
    padding: 15px;
`;

export const CreateTweetTop = () => {
    // const { createTweet } = useTweet()

    const onSubmit = async (text) => {
        // createTweet(text)
    };

    return (
        <Container>
            <TweetForm placeholder="What's happening?" onSubmit={onSubmit} />
        </Container>
    );
};
