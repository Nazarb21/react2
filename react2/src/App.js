import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import PostDetails from './components/PostDetails';

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={UserList} />
                <Route path="/user/:userId" component={UserDetails} />
                <Route path="/post/:postId" component={PostDetails} />
            </div>
        </Router>
    );
};

export default App;
