import React, { useState } from 'react';

export const Form = ({ onSendMessage }) => {
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');

    const authorChange = (e) => {
        setAuthor(e.target.value);
    }

    const messageChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessage({
            author: author,
            id: Date.now(),
            message: message,
        });
        setAuthor('');
        setMessage('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={author} onChange={authorChange} />
            <input type="text" value={message} onChange={messageChange} />
            <input type="submit" />
        </form>
    )
}