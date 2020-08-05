import React, {useEffect, useState} from 'react';
import Categories from "./components/Caregories/Categories";
import Question from "./components/Question/Question";
import Button from "./components/Button/Button";
import Popup from "./components/Popup/Popup";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {unCheckAllCategory} from "./store/actions";

const App = () => {
  const dataBase = useSelector(state => state.dataBase);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const [isStartClicked, setStartClicked] = useState(false);
  const [isShowPopup, setShowPopup] = useState(false);
  const [isQuestionsOver, setQuestionsOver] = useState(false);
  const [isDisabled, setDisabled] = useState(true);

  const startLearning = () => {
    setStartClicked(true);
  };

  const againLearning = () => {
    setShowPopup(true);
  };

  const getQuestions = () => {
    let array = [];
    const checkedCategories = categories.filter(category => category.checked === true);
    checkedCategories.forEach(category => {
      dataBase.forEach(questionsCategory => {
        if (questionsCategory.category === category.value.toLowerCase()) {
          array = array.concat(questionsCategory.questions);
        }
      });
    });
    return array;
  };

  const handleSubmit = () => {
    setStartClicked(false);
    setQuestionsOver(false);
  };

  const handleCancel = () => {
    dispatch(unCheckAllCategory());
    setStartClicked(false);
    setQuestionsOver(false);
  };

  return (
    <div className="main-container">
      <Categories setDisabled={setDisabled}/>
      {isQuestionsOver && <p className='title__warning'>ВЫ ОТВЕТИЛИ НА ВСЕ ВОПРОСЫ</p>}
      <Button
        onClick={isQuestionsOver ? againLearning : startLearning}
        title={isQuestionsOver ? 'TRAIN AGAIN' : 'START'}
        className='button button--start'
        isDisabled={isDisabled}
      />
      {isStartClicked &&
        <Question questions={getQuestions()} setQuestionsOver={setQuestionsOver}/>
      }
      {isShowPopup &&
      <Popup setShowPopup={setShowPopup} onSubmit={handleSubmit} onCancel={handleCancel}/>}
    </div>
  );
};

export default App;
