import React from 'react';
import { Redirect } from 'react-router-dom';
// Routes
import SignUp from '../pages/SignUp';
import Feed from '../pages/Feed';
import NotFound from '../pages/NotFound';
// Helpers
import { PrivateRoute } from './helpers';

export default [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/feed" />
    },
    {
        path: '/signup',
        exact: true,
        component: SignUp
    },
    {
        path: '/feed/:id?',
        exact: true,
        component: () => <PrivateRoute path="/feed/:id?" component={Feed} />
    },
    {
        exact: true,
        component: NotFound
    }
]