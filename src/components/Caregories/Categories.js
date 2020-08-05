import React, {useEffect, useState} from "react";
import './Categories.scss'
import {useDispatch, useSelector} from "react-redux";
import {checkCategory, unCheckCategory} from "../../store/actions";

const Categories = ({setDisabled}) => {
  const dispatch = useDispatch();
  const categoriesList = useSelector(state => state.categories);

  const handleChange = ({target}) => {
    setDisabled(false);
    !target.checked ? dispatch(unCheckCategory(target.id)) : dispatch(checkCategory(target.id));
  };

  return (
    <div className='container'>
      <div className='categories-block'>
        <h1 className='categories-block__title'>Categories</h1>
        <ul className='categories-block__list'>
          {categoriesList.map(item => (
            <li key={item.id} className='categories-block__item categories-item'>
              <input
                type='checkbox'
                id={item.value.toLowerCase()}
                className='categories-item__check'
                onChange={handleChange}
                checked={item.checked}
              />
              <label htmlFor={item.value.toLowerCase()} className='categories-item__title'>{item.value}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Categories;