import React, {useState} from "react";
import './Question.scss';
import Button from "../Button/Button";
import Answer from "../Answer/Answer";
import {useSelector} from "react-redux";

const Question = (props) => {
  const { questions, setQuestionsOver } = props;
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [isShowQuestion, setShowQuestion] = useState(false);
  const [isShowAnswer, setShowAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isDisabledBtn, setDisabledBtn] = useState(false);
  const [isShowAnswerBtn, setAnswerShowBtn] = useState(false);

  const showRandomQuestion = () => {
    setDisabledBtn(false);
    setAnswerShowBtn(false);
    setShowAnswer(false);

    if (usedQuestions.length === questions.length) {
      handleEndQuiz();
      return;
    }
    setShowAnswer(false);

    const randomIndex = Math.floor(Math.random() * Math.floor(questions.length));
    if (!usedQuestions.includes(randomIndex) ) {
      setUsedQuestions(prevState => ([
        ...prevState,
          randomIndex,
      ]));
      setCurrentQuestion(questions[randomIndex]);
      setShowQuestion(true);

    } else {
      showRandomQuestion();
    }
  };

  const handleEndQuiz = () => {
    setQuestionsOver(true);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleKnow = () => {
    setAnswerShowBtn(true);
    setDisabledBtn(true);
  };

  const handleNotKnow = () => {
    setDisabledBtn(true);
    handleShowAnswer();
  };

  return (
    <div className="container">
      <div className='question-block'>
        <div className="question-block__question question">
         <Button
           title='RANDOM QUESTION'
           className='button button--random'
           onClick={showRandomQuestion}
           disabled={isDisabledBtn}
         />
          {isShowQuestion &&
          <div className="questions-text-block">
            <h2 id="questionTitle" className='question__title title'>{currentQuestion.title}</h2>
            <p id="questionText" className="question__text text">{currentQuestion.text}</p>
            <div className='buttons-group'>
              <button className='button button--correct' onClick={handleKnow} disabled={isDisabledBtn}>Это я знаю!</button>
              <button className='button button--wrong' onClick={handleNotKnow} disabled={isDisabledBtn}>Не знаю &#9785;</button>
              {isShowAnswerBtn && <button className='button button--answer' onClick={handleShowAnswer}>Молодец! Посмотри ответ, чтоб проверить себя</button>}
            </div>
          </div>
          }
        </div>
        {isShowAnswer && <Answer question={currentQuestion}/>}
      </div>
    </div>
  )
};

export default Question;