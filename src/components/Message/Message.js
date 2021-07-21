import './Message.scss';

function Message(props) {
  return (
    <div className="mes">
        <div className="message">
            <p className="message__title">{props.title}</p>
            <p className="message__text">{props.text}</p>
        </div>
        <div className="message">
            <h1 className="message__title">{props.title}</h1>
            <p className="message__text">{props.text}</p>
        </div>
        <div className="message">
            <h1 className="message__title">{props.title}</h1>
            <p className="message__text">{props.text}</p>
        </div>
    </div>
    
  );
}



export default Message;
