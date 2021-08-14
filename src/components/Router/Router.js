import './Router.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Menu } from '../Menu/Menu';
import { Profile } from '../Profile/Profile';
import { Home } from '../Home/Home';

export const Router = () => {
    return (
        <Container>
            <BrowserRouter>
                <Menu />

                <Switch>
                    <Route path="/profile"> <Profile /> </Route>
                    <Route path="/" exact> <Home /> </Route>
                    <Route path="*">
                        <h2>404</h2>
                        <p>Такой страницы не существует!</p>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Container>
        
    )
}