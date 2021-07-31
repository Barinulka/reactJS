import './App.scss';
import React, { useCallback, useEffect, useState } from 'react';
import { MessageForm } from './MessageForm/MessageForm';
import { MessageField } from './MessageField/MessageField';

export const App = () => {
  
  const [messages, setMessages] = useState([]);

  const handleSendMessages = useCallback((newMessage) => {
    setMessages([...messages, newMessage]);
  }, [messages]);

  useEffect(() => {
    const roboMesArr = ['Hello', 'JavaScript', 'ReactJS', 'Hello there', 'quis lectus nulla at volutpat diam ut venenatis tellus in', 'leo in vitae turpis massa sed elementum tempus egestas sed', 'dignissim enim sit amet venenatis urna'];
    if (messages.length && messages[messages.length - 1].name !== 'Robot') {
        const robotMess = { name: 'Robot', text: arrayRandElement(roboMesArr), id: Date.now()};
        setTimeout( () => setMessages([...messages, robotMess]), 1500 );
    }
  }, [messages])

  const arrayRandElement = (arr) => {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

  return (
    <div className="App center">
      <div>
        <MessageForm onSendMessages={handleSendMessages}/>
       
      </div>
      
      <div>
        <MessageField messages={messages} />
      </div>
    </div>
  );
}



export default App;
