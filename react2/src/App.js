import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EpisodePage from './pages/EpisodePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/episode/:id" element={<EpisodePage />} />
            </Routes>
        </Router>
    );
}

export default App;
