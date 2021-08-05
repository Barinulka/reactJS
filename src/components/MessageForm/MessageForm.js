import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './MessageForm.scss';

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
            name: 'Me',
            text: text,
            id: Date.now(),
        });
        setName('');
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <TextField className="form__mess"  label="Message" variant="outlined" value={ text } onChange={ handleChangeText } />
            <Button type="submit" variant="outlined">Отправить</Button>
        </form>
    )
}
