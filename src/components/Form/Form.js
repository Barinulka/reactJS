import React, { useState } from 'react';
import './Form.scss';

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
            message: message,
            id: Date.now()
        });
        setAuthor('');
        setMessage('');
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" value={author} onChange={authorChange} placeholder="Имя" className="form__input" />
            <textarea name="message" rows="5"  value={message} onChange={messageChange} placeholder="Сообщение" className="form__text" />
            <input type="submit" className="form__submit" />
        </form>
    )
}
