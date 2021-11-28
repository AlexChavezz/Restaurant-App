import React, {useState, useEffect} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { PublicRouter } from './PublicRouter';
import { getElementsAsync } from '../actions/actionElements';
import { Dashboard } from '../UI/Dashboard/Dashboard';
import { useSelector } from 'react-redux';

export const AppRouter = () => {
    // const [ isLoggedIn, setIsLoggedIn ] = useState(true);
    const isLoggedIn = useSelector(state => state.auth)
    const [elements, setelements] = useState(false);
    const dispatch = useDispatch();
     useEffect(() => {
        async function getTodos(){
            await dispatch(getElementsAsync());
            setelements(true);
        }
        getTodos();
     },[dispatch]);
     if(!elements){
         return (
           <div className="loader_container">
             <div className="loader"></div>
           </div>
        )
     }
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/public/*" element={
                        <PublicRoutes isLoggedIn={isLoggedIn}>
                            <PublicRouter />
                        </PublicRoutes>

                    }
                    />
                    <Route path="/private/*" element={
                        <PrivateRoutes isLoggedIn={isLoggedIn}>
                            <Dashboard />
                        </PrivateRoutes>}
                    />
                    <Route path="/" element={<Navigate to ="/public"/>} />
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
