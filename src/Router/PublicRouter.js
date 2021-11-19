import React from 'react';
import { Route, Routes } from 'react-router';
import { LoginScreen } from '../UI/auth/LoginScreen';
import { InitialScreen } from '../UI/Initial_Screen/InitialScreen';
import { ElementScreen } from '../UI/MenuScreen/ElementScreen';
import { MenuScreen } from '../UI/MenuScreen/MenuScreen';
import { BuyScreen } from '../UI/ShopScreen/BuyScreen';
import { ShopScreen } from '../UI/ShopScreen/ShopScreen';

export const PublicRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<InitialScreen/>} />
            <Route path="/auth" element={<LoginScreen/>}/>
            <Route path="/menu" element={<MenuScreen/>} />
            <Route path="/shopping/cart" element={<ShopScreen/>}/>
            <Route path="/shopping/buy" element={<BuyScreen/>}/>
            <Route path="menu/:elementId" element={<ElementScreen />} />
        </Routes>
    )
}
