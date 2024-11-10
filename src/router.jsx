import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import Tracker from './Components/tracker';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tracker" element={<Tracker />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
