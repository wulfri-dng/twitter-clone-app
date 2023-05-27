import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HomePage } from './components-home-page';
import { MainContext } from './context/mainContext';
import { useState } from 'react';

export const App = () => {
    const [loggedUser, setLoggedUser] = useState(null);

    return (
        <MainContext.Provider value={{ loggedUser, setLoggedUser }}>
            <BrowserRouter>
                {/* <ScrollToTop /> */}
                <Routes>
                    {/* <Route path="/" element={<StartPage />} /> */}
                    <Route element={<HomePage />} path="/" />
                    {/* <Route element={<Profile />} path="/:user_id" />
        <Route element={<Thread />} path="/:user_id/status/:id" />
        <Route element={<Notifications />} path="/notifications" /> */}
                </Routes>
            </BrowserRouter>
        </MainContext.Provider>
    );
};
