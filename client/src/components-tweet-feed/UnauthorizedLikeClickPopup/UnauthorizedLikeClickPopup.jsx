import styled from 'styled-components';

const Container = styled.div`
    width: 400px;
    margin: auto;
    height: 400px;
    margin-top: 30px;

    h2 {
        font-size: 28px;
    }

    .popup {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;

        &__details {
            &__category {
                font-size: 13px;
                display: flex;
                color: #aaa;

                &--label {
                    margin-left: 20px;
                    position: relative;

                    &::after {
                        content: '';
                        width: 2px;
                        height: 2px;
                        background-color: #aaa;
                        border-radius: 50%;
                        left: -10px;
                        top: 0;
                        bottom: 0;
                        margin: auto 0;
                        position: absolute;
                    }
                }
            }

            &__title {
                font-weight: bold;
                color: white;
                font-size: 16px;
                margin: 2px 0;
                display: block;
            }
        }
    }

    .btn {
        width: 100%;
        margin-top: 20px;
        border-radius: 30px;
        color: black;
        text-align: center;
        padding: 15px 0;
        font-size: 16px;
        font-weight: 700;
    }

    .login-btn {
        background: rgb(29, 155, 240);
        color: white;
    }

    .register-btn {
        color: rgb(29, 155, 240);
        border-color: red;
        border: 1px solid white;
    }

    .svgWrapper {
        width: 100%;
    }

    .bottom-icon {
        font-family: 'Roboto', sans-serif;
        fill: rgb(249, 24, 128);
        width: 55px;
        margin: auto;
    }

    .textArea {
        margin: 35px 0;
    }
`;

export const UnauthorizedLikeClickPopup = () => {
    return (
        <Container>
            <div className="svgWrapper bottom-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                </svg>
            </div>
            <div className="textArea">
                <h2>Like a Tweet to share the love.</h2>
                <span className="popup__details__category">
                    Join Twitter now to let Daily Loud know you like their
                    Tweet.
                </span>
            </div>
            <button onClick={() => {}} className="btn login-btn">
                Log in
            </button>
            <button onClick={() => {}} className="btn register-btn">
                Sign up
            </button>
        </Container>
    );
};
