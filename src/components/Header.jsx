import React from 'react';
import './Header.css';



function Header({ title, onStartQuiz }) {
  return (
    <header>
      <h1>{title}</h1>
      <button className="top-right-link" onClick={onStartQuiz}>
        Начать Новогодний квиз
      </button>
    </header>
  );
}



export default Header;