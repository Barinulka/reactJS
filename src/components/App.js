import './App.scss';
import React, {useCallback, useState, useEffect} from 'react';
import { Form } from './Form/Form';
import { MessageField } from './MessageField/MessageField';

export const App = () => {
    console.log('render');

    const [messageList, setMessageList] = useState([]);


    const arrayRandElement = (arr) => {
        let rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    useEffect(() => {
        const roboMesArr = ['Hello', 'JavaScript', 'ReactJS', 'Hello there', 'quis lectus nulla at volutpat diam ut venenatis tellus in', 'leo in vitae turpis massa sed elementum tempus egestas sed', 'dignissim enim sit amet venenatis urna'];
        if (messageList.length && messageList[messageList.length - 1].author !== 'Robot') {
            const robotMess = { author: 'Robot', message: arrayRandElement(roboMesArr), id: Date.now()};
            setTimeout( () => setMessageList([...messageList, robotMess]), 1500 );
        }
    }, [messageList]);

    const handleSendMessage = useCallback((newMesasge) => {
        setMessageList([...messageList, newMesasge]);
    }, [messageList]);

    return (
        <div className="App center">
            <div className="App__message">
                <MessageField messageList={messageList} />
            </div>
            <Form onSendMessage={handleSendMessage} />
        </div>
    );
}


export default App;
