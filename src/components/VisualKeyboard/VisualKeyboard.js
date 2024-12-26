import React from 'react';
import { KEYBOARD_LAYOUT } from '../../constants';

function VisualKeyboard({ guess, setGuess }) {

  function inputKey(e) {
    if(guess.length >= 5) {
      return;
    }
    setGuess(guess + e.target.innerText);
  }

  return <div>
    {Object.keys(KEYBOARD_LAYOUT).map((row, i) => {
      return <div key={i} className="keyboard-row">
        {KEYBOARD_LAYOUT[row].map((key) => {
          return <button key={key} className="keyboard-key" onClick={inputKey}>{key}</button>;
        })}
      </div>;
    })}
  </div>;
}

export default VisualKeyboard;
