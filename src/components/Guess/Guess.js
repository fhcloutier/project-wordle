import React from 'react';
import { range } from '../../utils';
import {checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((i) => {
        return <Cell 
          key={i} 
          letter={result ? result[i].letter : undefined} 
          status={result ? result[i].status : undefined} 
        />;
      })}
    </p>
  );
}

export default Guess;
