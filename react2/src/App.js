import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Todos from './components/Todos';
import Albums from './components/Albums';
import Comments from './components/Comments';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/todos">Todos</Link></li>
                        <li><Link to="/albums">Albums</Link></li>
                        <li><Link to="/comments">Comments</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/todos" component={Todos} />
                    <Route path="/albums" component={Albums} />
                    <Route exact path="/comments" component={Comments} />
                    {/* Додайте решту маршрутів тут */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
