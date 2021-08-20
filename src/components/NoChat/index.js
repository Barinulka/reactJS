import React from 'react';
import { ChatList } from '../ChatList';

export const NoChat = ({ chats }) => (
    <>
      <span>Выберите чат из списка: </span>
      <ChatList chats={chats} />
    </>
   )