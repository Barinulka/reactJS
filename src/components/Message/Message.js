import './Message.scss';

export const Message = ({author, message}) => {
  return (
    <div className="mes">
        <div className="message">
            <p className="message__title">{author}</p>
            <p className="message__text">{message}</p>
        </div>
        
    </div>
    
  );
}