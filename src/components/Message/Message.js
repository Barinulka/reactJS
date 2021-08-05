import './Message.scss';

export const Message = ({ name, text }) => {
  return (
    <div className={(name === 'Robot') ? "mess mess-robo" : "mess"}>
      <p className="mess__name">{ name }:</p>
      <span className="mess__text">{ text }</span>
    </div>
  )
}