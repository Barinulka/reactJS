import './App.scss';
import React, { useCallback, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { MessageForm } from './MessageForm/MessageForm';
import { MessageField } from './MessageField/MessageField';
import { ChatList } from './ChatList/ChatList';

export const App = () => {


  const [messages, setMessages] = useState([]);

  const handleSendMessages = useCallback((newMessage) => {
    setMessages([...messages, newMessage]);
  }, [messages]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roboMesArr = ['Hello', 'JavaScript', 'ReactJS', 'Hello there', 'quis lectus nulla at volutpat diam ut venenatis tellus in', 'leo in vitae turpis massa sed elementum tempus egestas sed', 'dignissim enim sit amet venenatis urna'];

  const arrayRandElement = (arr) => {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

  useEffect(() => {

    if (messages.length && messages[messages.length - 1].name !== 'Robot') {
        const robotMess = { name: 'Robot', text: arrayRandElement(roboMesArr), id: Date.now()};
        setTimeout( () => setMessages([...messages, robotMess]), 1000 );
    }
  }, [messages, roboMesArr]);

 

  return (
    <Container fixed>
      
      <div className="App" >
        
        <div className="left-field">
          <ChatList />
        </div>

        <div className="right-field">

          <div className="message-field">
            <MessageField messages={messages} />
          </div>

          <div className="form-field">
            <MessageForm onSendMessages={handleSendMessages}/>
          </div>
          
        </div>
        
      </div>
    </Container>
  );
}



export default App;
