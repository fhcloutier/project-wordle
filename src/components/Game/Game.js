import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../HappyBanner';
import SadBanner from '../SadBanner';
import VisualKeyboard from '../VisualKeyboard';


function Game() {
  const [guesses, setPreviousGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('running');
  const [answer, setAnswer] = React.useState(sample(WORDS));

  
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess]
    setPreviousGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }

  function restartGame() {
    setPreviousGuesses([]);
    setStatus('running');
    setAnswer(sample(WORDS));
  }

  return <>
    <button className="button" onClick={restartGame}>Restart</button>
    <GuessResults guesses={guesses} answer={answer}/>
    <GuessInput handleSubmitGuess={handleSubmitGuess} disabled={status !== 'running'}/>
    {status === 'won' && <WonBanner numOfGuesses={guesses.length}/>}
    {status === 'lost' && <SadBanner answer={answer} />}
  </>;
}

export default Game;
