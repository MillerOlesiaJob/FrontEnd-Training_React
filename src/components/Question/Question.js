import React, {useState} from "react";
import './Question.scss';
import Button from "../Button/Button";
import Answer from "../Answer/Answer";

const Question = (props) => {
  const { questions, setQuestionsOver } = props;
  const [usedQuestions, setUsedQuestions] = useState([]);
console.log(questions)
  // const [randomIndex, setRandomIndex] = useState(0);
  const [isShowQuestion, setShowQuestion] = useState(false);
  const [isShowAnswer, setShowAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const showRandomQuestion = () => {
    console.log(usedQuestions.length);
    console.log(questions.length)
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

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleEndQuiz = () => {
    setQuestionsOver(true);
    console.log('END');
  };

  return (
    <div className="container">
      <div className='question-block'>
        <div className="question-block__question question">
         <Button
           title='RANDOM QUESTION'
           className='button button--random'
           onClick={showRandomQuestion}
         />
          {isShowQuestion &&
          <div className="questions-text-block">
            <h2 id="questionTitle" className='question__title title'>{currentQuestion.title}</h2>
            <p id="questionText" className="question__text text">{currentQuestion.text}</p>
            <h2 className='title' onClick={handleShowAnswer}>Ответ</h2>
          </div>
          }
        </div>
        {isShowAnswer && <Answer question={currentQuestion}/>}
      </div>
    </div>
  )
};

export default Question;