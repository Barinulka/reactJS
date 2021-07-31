import React, { useState } from 'react';

export const MessageForm = ({ onSendMessages }) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeText = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessages({
            name: name,
            text: text,
            id: Date.now(),
        });
        setName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={ name } onChange={ handleChangeName } />
            <input type="text" placeholder="Text" value={ text } onChange={ handleChangeText } />
            <input type="submit" />
        </form>
    )
}