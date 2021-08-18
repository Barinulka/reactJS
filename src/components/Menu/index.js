import { List, ListItem } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import "./style.scss";

export const Menu = () => {

    const handleClick = (e) => {
        // console.log(e.target);
        let elem = document.querySelectorAll('.menu-item');
        
        elem.forEach(el => {
            // console.log(el);
            el.classList.remove('active');
        });
            
        e.currentTarget.classList.add('active');
        
    }

    return (
        <div className="menu">
            <List className="menu-list">
                <ListItem className="menu-item" onClick={handleClick}>
                    <Link className="menu-link" to="/" >Главная</Link>
                </ListItem>
                <ListItem className="menu-item" onClick={handleClick}>
                    <Link className="menu-link" to="/profile" >Профиль</Link>
                </ListItem>
                <ListItem className="menu-item" onClick={handleClick}>
                    <Link className="menu-link" to="/chats" >Чаты</Link>
                </ListItem>
            </List>
        </div>
    )
}