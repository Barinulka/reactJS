import React, { useState } from "react";
import { List, ListItem } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import './style.scss';

export const ChatList = ({ chats }) => {

  const location = useLocation();

  const [active, setActive] = useState(location.pathname);

  const handleClick = (e) => {
    setActive(e.target.pathname);
    console.log(active)
  }

  return (
    <div className="chats" >
    
      <List>
        {Object.values(chats).map((c) => (
          <ListItem key={c.id} className="item" >
            <Link to={`/chats/${c.id}`} className={active === `/chats/${c.id}` ? 'active' : ''} onClick={handleClick}> {c.name} </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};