

import React, { useState } from 'react';
import './QuizModal.css';
import quizQuestions from './quizQuestions';

function QuizModal({ onClose }) {
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({});

  const handleOptionChange = (questionIndex, optionIndex) => {
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex,
    });
  };

  const submitQuiz = () => {
    let newScore = 0;
    quizQuestions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {score === null ? (
          <>
            <h2>Новогодний квиз</h2>
            <div className="quiz-content">
              {quizQuestions.map((q, index) => (
                <div key={index}>
                  <p>{`${index + 1}. ${q.question}`}</p>
                  {q.answers.map((answer, i) => (
                    <label key={i}>
                      <input
                        type="radio"
                        name={`question${index}`}
                        value={i}
                        checked={answers[index] === i}
                        onChange={() => handleOptionChange(index, i)}
                      />
                      {answer}
                    </label>
                  ))}
                </div>
              ))}
            </div>
            <button className="submit-button" onClick={submitQuiz}>
              Отправить ответы
            </button>
          </>
        ) : (
          <>
            <h2>Ваш результат</h2>
            <p>
              Вы набрали {score} из {quizQuestions.length} правильных ответов!
            </p>
            <button onClick={onClose}>Закрыть</button>
          </>
        )}
      </div>
    </div>
  );
}

export default QuizModal;