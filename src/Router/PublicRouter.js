import React from 'react';
import { Route, Switch } from 'react-router';
import { LoginScreen } from '../UI/auth/LoginScreen';
import { InitialScreen } from '../UI/Initial_Screen/InitialScreen';
import { MenuScreen } from '../UI/MenuScreen/MenuScreen';

export const PublicRouter = () => {
    return (
        <Switch>
            <Route exact path="/public" component={InitialScreen} />
            <Route path="/public/auth" component={LoginScreen} />
            <Route path="/public/menu" component={MenuScreen} />
        </Switch>
    )
}
