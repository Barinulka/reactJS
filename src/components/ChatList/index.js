import React from "react";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import './style.scss';

export const ChatList = ({ chats }) => {

  const handleClick = (e) => {
    // console.log(e.target);
    let elem = document.querySelectorAll('.item');
    
    elem.forEach(el => {
        // console.log(el);
        el.classList.remove('active');
    });
        
    e.currentTarget.parentNode.classList.add('active');
    
}

  return (
    <div className="chats" >
      <List>
        {Object.values(chats).map((c) => (
          <ListItem key={c.id} className="item">
            <Link to={`/chats/${c.id}`} onClick={handleClick}> {c.name} </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};