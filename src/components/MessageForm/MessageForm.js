import React, { useRef, useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import './MessageForm.scss';

export const MessageForm = ({ onSendMessages }) => {
    const [text, setText] = useState('');
    const textInput = useRef(null);

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
        setText('');
    }

    useEffect(() => {
        textInput.current.focus();
    }, []);

    function handleClick() {
        textInput.current.focus();
    }

  

    return (
        <form className="form" onSubmit={handleSubmit}>
            <TextField inputRef={textInput} className="form__mess"  label="Message" variant="outlined" value={ text } onChange={ handleChangeText } />
            <Button type="submit" variant="outlined" onClick={handleClick} >Отправить</Button>
        </form>
    )
}
