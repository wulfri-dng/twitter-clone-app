import styled from 'styled-components';
import { Modal } from '../../shared';
import { TweetForm } from '../TweetForm/TweetForm';

const Container = styled.div`
    .modal-block {
        margin-top: 20px;
        padding: 15px;
        width: 600px;
        height: max-content;
        z-index: 10;
    }

    .tweet-form {
        margin-top: 20px;
    }
`;

export const CreateTweetDialog = ({ onClickOutside }) => {
    // const { createTweet } = useTweet()

    const onSubmit = async (text) => {
        // createTweet(text)

        onClickOutside();
    };

    return (
        <Container>
            <Modal onClickOutside={onClickOutside} className="modal-block">
                <TweetForm
                    onSubmit={onSubmit}
                    shouldFocus={true}
                    minHeight={240}
                    className="tweet-form"
                    placeholder="What's happening"
                />
            </Modal>
        </Container>
    );
};
