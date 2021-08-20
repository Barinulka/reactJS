import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { AUTHORS } from "../../const";
import './style.scss';

export const Form = ({ onSendMessage }) => {
    const [value, setValue] = useState('');
    const textInput = useRef(null);

    const handleChangeText = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessage({
            text: value,
            author: AUTHORS.human,
            id: Date.now(),
        });
        setValue('');
        textInput.current.focus();
    }

    useEffect(() => {
        textInput.current.focus();
    }, []);

    return (
        <form className="form" onSubmit={handleSubmit}>
            <TextField inputRef={textInput} className="form__mess"  label="Message" variant="outlined" value={ value } onChange={ handleChangeText } />
            <Button type="submit" variant="outlined">Отправить</Button>
        </form>
    )
}
