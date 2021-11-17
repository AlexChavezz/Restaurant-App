import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { HomeScreen } from '../UI/Home/HomeScreen';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <PrivateRoutes isLoggedIn={isLoggedIn}>
                            <HomeScreen />
                        </PrivateRoutes>} 
                    />
                    <Route path="/public/*" element={
                        <PublicRoutes isLoggedIn={isLoggedIn}>
                            <PublicRouter />
                        </PublicRoutes>

                    }
                    />
                    {/* <PublicRoutes
                        path="/public"
                        component={PublicRouter}
                        isLoggedIn={isLoggedIn}
                    />
                    <PrivateRoutes
                        exact
                        path="/"
                        component={HomeScreen}
                        isLoggedIn={isLoggedIn}
                    /> */}
                </Routes>
        </BrowserRouter>
    )
}
