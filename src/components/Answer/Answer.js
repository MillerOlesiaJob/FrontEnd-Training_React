import React from "react";
import './Answer.scss';

const Answer = (props) => {
  const {question} = props;
  console.log(question);

  const getQuestion = () => {
    const answerType = typeof question.answer;

    switch (answerType) {
      case 'string':
        return question.answer;
      case 'object' :
        return (typeof question.answer[0] === "object")
          ? <table><tbody>{getAnswerTable()}</tbody></table>
          : <ul>{getAnswerBlock()}</ul>;
      default:
        console.log(question.answer);
    }
  };

  const getAnswerBlock = () => question.answer.map((point, index) => {
    return <li key={index}>{point}</li>
  });

  const getAnswerTable = () => question.answer.map((point, index) => {
    return <tr key={index}><td>{point.value}</td><td>{point.explan}</td></tr>
  });

  const getLinks = () => {
    if (question.links) {
      return question.links.map((link, index) => <li key={index}><a href={link}>{link}</a></li>)
    }
  };

  return (
    <div className="answer-block">
      <div id="answerText" className="answer-block__text text">{getQuestion()}</div>
      <h2 className='title title'>Ссылки</h2>
      <ul>{getLinks()}</ul>
    </div>
  );
};

export default Answer;