import React from 'react';
import { Route, Routes } from 'react-router';
import { LoginScreen } from '../UI/auth/LoginScreen';
import { InitialScreen } from '../UI/Initial_Screen/InitialScreen';
import { ElementScreen } from '../UI/MenuScreen/ElementScreen';
import { MenuScreen } from '../UI/MenuScreen/MenuScreen';

export const PublicRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<InitialScreen/>} />
            <Route path="/auth" element={<LoginScreen/>}/>
            <Route path="/menu" element={<MenuScreen/>} />
            <Route path="menu/:elementId" element={<ElementScreen />} />
        </Routes>
    )
}
