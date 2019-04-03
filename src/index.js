import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import './index.css';
import SignUp from './components/SignUp';
import Feed from './components/Feed';
import NotFound from './components/NotFound';
import * as serviceWorker from './serviceWorker';
import { PrivateRoute } from './helpers/PrivateRoute';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/feed" />} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/feed/:id?" component={Feed} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
