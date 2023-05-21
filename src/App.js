import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

export const App = () => {
    return (
        <BrowserRouter>
            {/* <ScrollToTop /> */}
            <Routes>
                {/* <Route path="/" element={<StartPage />} /> */}
                <Route element={<HomePage />} path="/home" />
                {/* <Route element={<Profile />} path="/:user_id" />
        <Route element={<Thread />} path="/:user_id/status/:id" />
        <Route element={<Notifications />} path="/notifications" /> */}
            </Routes>
        </BrowserRouter>
    );
};
