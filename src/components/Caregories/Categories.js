import React, {useEffect, useState} from "react";
import './Categories.scss'

const categoriesList = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'REACT',
  'REDUX',
  'ALL',
];

const Categories = (props) => {
  const {handleCheckItem, handleUncheckItem, isNewCategories} = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = ({target}) => {
    if (target.checked) {
      handleCheckItem(target.id);
    } else {
      handleUncheckItem(target.id);
    }
  };

  useEffect(() => {
    setIsChecked(true);
  }, [isNewCategories]);

  return (
    <div className='container'>
      <div className='categories-block'>
        <h1 className='categories-block__title'>Categories</h1>
        <ul className='categories-block__list'>
          {categoriesList.map((item, index) => (
            <li key={index} className='categories-block__item categories-item'>
              <input
                type='checkbox'
                id={item.toLowerCase()}
                className='categories-item__check'
                onChange={handleChange}
                checked={isChecked ? true : null}
              />
              <label htmlFor={item.toLowerCase()} className='categories-item__title'>{item}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Categories;