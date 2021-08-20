import React, { useEffect } from 'react';
import { AUTHORS } from "../../const";
import { roboMessArr } from '../../const';
import { useParams } from "react-router-dom";
import { ChatList } from '../ChatList';
import { Form } from '../Form';
import { MessageList } from '../MessageList';
import { Redirect } from 'react-router-dom';
import './style.scss';
import { arrayRandElement } from '../../utils';

export const Chats = ({ chats, setChats }) => {
    const { chatId } = useParams();
    
    const handleSendMessage = ((newMessage) => {
        setChats({
            ...chats, [chatId]: {
                ...chats[chatId],
                messages: [...chats[chatId].messages, newMessage],
            },
        });
    });

    useEffect(() => {
        if (
          !chatId || !chats[chatId]?.messages.length || chats[chatId].messages[chats[chatId].messages.length - 1].author === AUTHORS.robot ) {
            return ;
        }
    
        const timeout = setTimeout(() => {
          const newMessage = {
            text: arrayRandElement(roboMessArr),
            author: AUTHORS.robot,
            id: Date.now(),
          };
    
          handleSendMessage(newMessage);
        }, 1000);
    
        return () => clearTimeout(timeout);
    });

    if (!chatId || !chats[chatId]) {
        return <Redirect to="/nochat" />
    }

    return (
        <div className="root" >
            <ChatList chats={chats} />
            {!!chatId && (
                <div className="chat-block">
                    <div className="message-field">
                        <MessageList messages={chats[chatId].messages} />
                    </div>
                    <div className="form-field">
                        <hr />
                        <Form onSendMessage={handleSendMessage} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chats;