import React, { useState } from 'react';
import './App.css';
import ReactCardFlip from 'react-card-flip';

const flashcard_data = [
  { question: "1 + 1", answer: "2" },
  { question: "12 * 12", answer: "144" },
  { question: "14 * 2", answer: "28" },
  { question: "3 + 9", answer: "12" },
  { question: "99 - 0", answer: "99" },
  { question: "125 + 24", answer: "149" },
  { question: "1 + 5", answer: "6" },
  { question: "12 * 10", answer: "120" },
  { question: "1 / 0", answer: "DNE" },
  { question: "12 * 0", answer: "0" },
  { question: "400x dx", answer: "400" }
];

const App = () => {
  const [card, setCard] = useState(0);
  const [isFlip, setFlip] = useState(false);

  const handleCardChange = (change) => {
    const newCard = card + change;
    if (newCard > flashcard_data.length - 1) {
      setCard(0);
    } 
    else if (newCard < 0) {
      setCard(flashcard_data.length - 1);
    } 
    else {
      setCard(newCard);
    }
  };

  return (
    <div className='App'>
      <h1>Math Do be Mathing</h1>
      <h2>How good are you at solving math? Test your math knowledge</h2>
      <h2>Number of Cards : 11</h2>
      <div className='card'>
      <ReactCardFlip isFlipped={isFlip}>
        <div className="front" onClick={() => setFlip(!isFlip)}>{flashcard_data[card].question}</div>
        <div className="back" onClick={() => setFlip(!isFlip)}>{flashcard_data[card].answer}</div>
      </ReactCardFlip>
      </div>     
      
      <button className='button' onClick={() => handleCardChange(1)}>Next</button>
    </div>
  );
};

export default App;