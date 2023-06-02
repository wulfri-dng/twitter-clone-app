import { useContext } from 'react';
import { Layout } from '../../components-layout';
import { HomeContent } from '../HomeContent/HomeContent.jsx';
import { MainContext } from '../../context/mainContext';
import { Modal } from '../../shared';
import { UnauthorizedClickPopup } from '../../components-tweet-feed/UnauthorizedClickPopup/UnauthorizedClickPopup';
import { LoginPopup } from '../../components-popups';

export const HomePage = () => {
    const contextData = useContext(MainContext);

    const onClickOutside = () => {
        contextData.setLoginPopupVisible(false);
        contextData.setRegisterPopupVisible(false);
    };

    return (
        <>
            <Layout>
                <HomeContent />
            </Layout>
            {contextData.loginPopupVisible && (
                <Modal onClickOutside={onClickOutside}>
                    <LoginPopup popupType={'comment'} />
                </Modal>
            )}
        </>
    );
};
