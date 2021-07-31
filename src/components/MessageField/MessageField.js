import React from 'react';
import { Message } from '../Message/Message';

export const MessageField = ({ messages }) => {
    return messages.map((mess) => (
        <Message name={mess.name} text={mess.text} key={mess.id} />
    ));
}