import { List, ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./style.scss";

export const Menu = () => {

    const location = useLocation();

    const [active, setActive] = useState(location.pathname);

    const handleClick = (e) => {
       setActive(e.target.pathname);
    }

    return (
        <div className="menu">
            <List className="menu-list">
                <ListItem className={"menu-item " + (active === '/' ? "active" : "")} onClick={handleClick}>
                    <Link className="menu-link" to="/" >Главная</Link>
                </ListItem>
                <ListItem className={"menu-item " + (active === '/profile' ? "active" : "")} onClick={handleClick}>
                    <Link className="menu-link" to="/profile" >Профиль</Link>
                </ListItem>
                <ListItem className={"menu-item " + (active === '/chats' ? "active" : "")} onClick={handleClick}>
                    <Link className="menu-link" to="/chats" >Чаты</Link>
                </ListItem>
            </List>
        </div>
    )
}