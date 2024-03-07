import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Home from './pages/Home';
import EpisodePage from './pages/EpisodePage';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/episode/:id" element={<EpisodePage />} />
            </Routes>
        </Router>
    </Provider>,
    document.getElementById('root')
);
