import { MainHeader } from '../MainHeader/MainHeader';
import { CreateTweetTop } from '../CreateTweetTop/CreateTweetTop';
import { TweetFeed } from '../../components-tweet-feed/TweetFeed/TweetFeed';
import styled from 'styled-components';

const Container = styled.div`
    .header {
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .create-tweet-top {
        border-bottom: 1px solid #333;
    }

    .new-tweets-info {
        border-bottom: 1px solid #333;
        padding: 20px;
        text-align: center;
        color: var(--theme-color);
        display: block;
        width: 100%;
        font-size: 16px;

        &:hover {
            background: #111;
        }
    }
`;

export const HomeContent = () => {
    return (
        <Container>
            <div className="header">
                <MainHeader />
            </div>
            <div className="create-tweet-top">
                <CreateTweetTop />
            </div>
            <TweetFeed />
        </Container>
    );
};
