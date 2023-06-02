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
        width: 55px;
        margin: auto;
    }

    .textArea {
        margin: 35px 0;
        color: white;
    }
`;

export const LoginPopup = () => {
    return (
        <Container>
            <div className="svgWrapper bottom-icon">
                <svg viewBox="0 0 24 24">
                    {/* <path d={selectedDataSet.svgPath}></path> */}
                </svg>
            </div>
            <div className="textArea">
                <h2>Sign in to Twitter</h2>
                <span className="popup__details__category">
                    Join Twitter now to let Daily Loud know you like their
                    Tweet.
                </span>
            </div>
            <button
                onClick={() => {
                    // resetPopups();
                    // contextData.setLoginPopupVisible(true);
                }}
                className="btn login-btn"
            >
                Log in
            </button>
            <button
                onClick={() => {
                    // resetPopups();
                    // contextData.setRegisterPopupVisible(true);
                }}
                className="btn register-btn"
            >
                Sign up
            </button>
        </Container>
    );
};
