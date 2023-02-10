import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
      setError('');
    } catch (err) {
      setError('Error: Invalid expression');
      setInput('');
    }
  };

  const handleClear = () => {
    setInput('');
    setError('');
  };

  return (
<div className="calculator">
    <div className="display">
        <p className="input">{input}</p>
        <p className="error">{error}</p>
    </div>
    <div className="buttons">
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick(0)}>0</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
    </div>
</div>
  );
};

export default Calculator;
import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';

ReactDOM.render(<Calculator />, document.getElementById('root'));

