import React from "react";
import './Button.scss';

const Button = (props) => {
  const { onClick, title, className, isDisabled } = props;
  console.log(isDisabled)

  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>{title}</button>
  )
};

export default Button;