import { useState } from 'react';
import { Layout } from '../../components-layout';
import { HomeContent } from '../HomeContent/HomeContent.jsx';
import { MainContext } from '../../context/mainContext';

export const HomePage = () => {
    const [isCreateTweetPopupVisible, setIsCreateTweetPopupVisible] =
        useState(false);

    return (
        <MainContext.Provider
            value={{ isCreateTweetPopupVisible, setIsCreateTweetPopupVisible }}
        >
            <Layout>
                <HomeContent />
            </Layout>
        </MainContext.Provider>
    );
};
