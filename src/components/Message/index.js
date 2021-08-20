import React from "react";
import './style.scss';

export const Message = ({ text, author }) => (
  <div className={(author === 'Robot') ? "mess mess-robo" : "mess"}>
      <p className="mess__name">{ author }:</p>
      <span className="mess__text">{ text }</span>
    </div>
);