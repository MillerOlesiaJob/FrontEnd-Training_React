import React, {useEffect, useState} from 'react';
import Categories from "./components/Caregories/Categories";
import Question from "./components/Question/Question";
import Button from "./components/Button/Button";
import Popup from "./components/Popup/Popup";
import './App.css';
import {useSelector} from "react-redux";

const App = () => {
  const dataBase = useSelector(state => state.dataBase);
  const categories = useSelector(state => state.categories);
  const [isStartClicked, setStartClicked] = useState(false);
  const [isShowPopup, setShowPopup] = useState(false);
  const [isQuestionsOver, setQuestionsOver] = useState(false);
  const [isNewCategories, setNewCategories] = useState(false);


  const startLearning = () => {
    setStartClicked(true);
  };

  const againLearning = () => {
    setShowPopup(true);
  };

  const getQuestions = () => {
    let array = [];
    const checkedCategories = categories.filter(category => category.checked === true);
    console.log(checkedCategories)
    checkedCategories.forEach(category => {
      dataBase.forEach(questionsCategory => {
        if (questionsCategory.category === category.value.toLowerCase()) {
          array = array.concat(questionsCategory.questions);
        }
      });
    });
     return array;
  };

  return (
    <div className="main-container">
      <Categories/>
      {isQuestionsOver && <p className='title__warning'>ВЫ ОТВЕТИЛИ НА ВСЕ ВОПРОСЫ</p>}
      <Button
        onClick={isQuestionsOver ? againLearning : startLearning}
        title={isQuestionsOver ? 'TRAIN AGAIN' : 'START'}
        //TODO add class for unable button
        className='button button--start'
      />
      {isStartClicked &&
        <Question questions={getQuestions()} setQuestionsOver={setQuestionsOver}/>
      }
      {isShowPopup &&
      <Popup setShowPopup={setShowPopup} setNewCategories={setNewCategories}/>}
    </div>
  );
};

export default App;
