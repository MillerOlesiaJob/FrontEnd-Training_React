import React from "react";
import './Button.scss';

const Button = (props) => {
  const { onClick, title, className } = props;

  return (
    <button className={className} onClick={onClick}>{title}</button>
  )
};

export default Button;