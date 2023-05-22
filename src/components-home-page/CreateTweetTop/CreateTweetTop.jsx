import styled from 'styled-components';
import { TweetForm } from '../../components-tweet-feed';

const Container = styled.div`
    padding: 15px;
`;

export const CreateTweetTop = () => {
    return (
        <Container>
            <TweetForm />
        </Container>
    );
};
