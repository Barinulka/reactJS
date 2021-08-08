import React from 'react';
import { Message } from '../Message/Message';

export const MessageField = ({ messageList }) => {
    return messageList.map((mess) => (
        <Message author={mess.author} message={mess.message} key={mess.id} />
    ));
}