import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    .reply-to {
        font-size: 14px;
        color: #888;
        display: flex;
        margin-left: 55px;
        margin-bottom: 10px;

        &--name {
            margin-left: 4px;
            color: var(--theme-color);
        }
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: ${({ inline }) => (inline ? 'center' : 'initial')};

    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 15px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .input-section {
        width: 100%;
        display: flex;
        flex: 1;
        flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
        align-items: ${({ inline }) => (inline ? 'center' : 'initial')};
        height: ${({ inline, minHeight }) => (inline ? '40px' : minHeight)};

        textarea {
            padding-top: 10px;
            background: none;
            border: none;
            padding-bottom: 0;
            font-size: 18px;
            width: 100%;
            flex: 1;
            resize: none;
            outline: none;
            color: white;
        }

        .actions {
            margin-top: ${({ inline }) => (inline ? '0' : 'auto')};
            display: flex;
            height: 50px;
            align-items: center;

            button {
                &:disabled {
                    opacity: 0.5;
                }
            }

            .right {
                margin-left: auto;
                display: flex;
                align-items: center;
            }

            .tweet-length {
                position: relative;

                svg {
                    position: relative;
                    top: 2px;
                }

                &__text {
                    position: absolute;
                    color: #888;
                    font-size: 14px;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    height: max-content;
                    width: max-content;

                    &.red {
                        color: red;
                    }
                }
            }

            .divider {
                height: 30px;
                width: 2px;
                border: none;
                background-color: #444;
                margin: 0 18px;
            }

            .submit-btn {
                background-color: var(--theme-color);
                padding: 10px 20px;
                color: white;
                border-radius: 30px;
                margin-left: auto;
                font-weight: bold;
                font-size: 16px;

                &:disabled {
                    opacity: 0.6;
                }
            }
        }
    }
`;