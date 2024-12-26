import React from 'react';
import VisualKeyboard from '../VisualKeyboard';

function GuessInput({ handleSubmitGuess, disabled }) {
  const [guess, setGuess] = React.useState('');

  return (
  <>
    <form
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();
        handleSubmitGuess(guess);
        setGuess('');
      }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          disabled={disabled}
          required
          id="guess-input"
          type="text"
          value={guess}
          pattern='[A-Z]{5}'
          title="5 letters"
          maxLength={5}
          onChange={event => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
        
    </form>
    <VisualKeyboard guess={guess} setGuess={setGuess} />
    </>
  );
}

export default GuessInput;
