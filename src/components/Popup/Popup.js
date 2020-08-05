import React from "react";
import './Popup.scss';
const Popup = (props) => {
  const {onSubmit, onCancel, setShowPopup} = props;

  const handleClosePopup = () => {
    setShowPopup(false)
  };

  return (
    <div className='wrap-popup '>
      <div className='popup'>
        <p className='popup-title'>Выбрать новые категории?</p>
        <div className='btn-group' onClick={handleClosePopup}>
          <button className='popup-btn button' onClick={onCancel}>ДА</button>
          <button className='popup-btn button' onClick={onSubmit}>НЕТ</button>
        </div>
      </div>
    </div>
  )
};

export default Popup;