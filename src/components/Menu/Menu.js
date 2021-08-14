import './Menu.scss';
import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';


export const Menu = () => {
    return (
        <List className="menu">
            <ListItem className="menu-list">
                <Link className="menu-link" to="/">Главная</Link>
            </ListItem>
            <ListItem className="menu-list">
                <Link className="menu-link" to="/profile">Профиль</Link>
            </ListItem>
        </List>
    );
}
