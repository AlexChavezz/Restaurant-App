import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { HomeScreen } from '../UI/Home/HomeScreen';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    return (
        <Router>
            <div>
                
                <Switch>
                    <PublicRoutes
                        path="/public"
                        component={PublicRouter}
                        isLoggedIn={isLoggedIn}
                    />
                    <PrivateRoutes
                        exact
                        path="/"
                        component={HomeScreen}
                        isLoggedIn={isLoggedIn}
                    />
                </Switch>
            </div>
        </Router>
    )
}
