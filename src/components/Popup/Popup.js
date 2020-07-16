import React from "react";
import './Popup.scss';
const Popup = (props) => {
  const {setShowPopup, setNewCategories} = props;

  const handleNewCategories = (pro) => {
    console.log('new');
    setNewCategories(true);
    setShowPopup(false);
  };

  const handleOldCategories = () => {
    console.log('old');
    setNewCategories(false);
    setShowPopup(false);
  };


  return (
    <div className='wrap-popup '>
      <div className='popup'>
        <p className='popup-title'>Выбрать новые категории?</p>
        <div className='btn-group'>
          <button className='popup-btn button' onClick={handleNewCategories}>ДА</button>
          <button className='popup-btn button' onClick={handleOldCategories}>НЕТ</button>
        </div>
      </div>
    </div>
  )
};

export default Popup;