import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
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
            name: name,
            text: text,
            id: Date.now(),
        });
        setName('');
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <TextField className="form__name" id="standard-basic" label="Name" value={ name } onChange={ handleChangeName } />
            <TextField className="form__mess" id="standard-basic" label="Message" variant="outlined" value={ text } onChange={ handleChangeText } />
            <input type="submit" />
        </form>
    )
}
