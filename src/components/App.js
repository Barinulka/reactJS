import './App.scss';
import React, {useCallback, useState} from 'react';
import { Form } from './Form/Form';
import { MessageField } from './MessageField/MessageField';
// import Message from './Message/Message';

export const App = () => {
    console.log('render');

    // const [author, setAuthor] = useState('');
    // const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    const handleSendMessage = useCallback((newMesasge) => {
        setMessageList([...messageList, newMesasge]);
    }, [messageList]);

    return (
        <div className="App center">
            <MessageField messageList={messageList} />
            <Form onSendMessage={handleSendMessage} />
        </div>
    );
}


export default App;