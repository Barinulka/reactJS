import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from '../Menu';
import { Home } from '../Home';
import { Profile } from '../Profile';
import { Chats } from '../Chats';
import { Container } from '@material-ui/core';
import { NoChat } from '../NoChat';
import { AUTHORS } from "../../const";

const initialChats = {
    chat1: {
        name: 'Чат 1',
        id: 'chat1',
        messages: [{
            text: 'First chat',
            author: AUTHORS.robot,
            id: 'chat1-1',
        }],
    },
    chat2: {
        name: 'Чат 2',
        id: 'chat2',
        messages: [{
            text: 'Second chat',
            author: AUTHORS.robot,
            id: 'chat2-1',
        }],
    },
}

export const Router = () => {
    const [chats, setChats] = useState(initialChats);

    return (
        <Container fixed>
        <BrowserRouter>
            <Menu />

            <Switch>
                <Route path="/" exact><Home /></Route>
                <Route path="/profile"><Profile  /></Route>
                <Route path="/nochat" exact><NoChat chats={chats} /></Route>
                <Route path="/chats/:chatId?"><Chats chats={chats} setChats={setChats} /></Route>
                <Route path="*">
                    <h2>404 Страница не найдена</h2>
                </Route>
            </Switch>
        </BrowserRouter>
        </Container>
        
    )
}