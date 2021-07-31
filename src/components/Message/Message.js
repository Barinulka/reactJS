import './Message.scss';

export const Message = ({ name, text }) => {
  return (
    <div>
      <p>{ name }</p>
      <span>{ text }</span>
    </div>
  )
}