import './index.css';
import React, { useState } from 'react';

const ChallengePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handlePrintResult = () => {
    setOutputValue('Result');
  }

  return (
    <div className="challenge-page">
      <h1>Coding Challenge</h1>
      <h2>Code</h2>
      <p>What is the output of the following code?</p>
      <pre><code>const arr = [1, 2, 3];{'\n'}
        console.log(arr[0]++);{'\n'}
        console.log(++arr[1]);{'\n'}
        console.log(arr[2]);</code></pre>
      <h2>Data Collection</h2>
      <div className="data-collection-input-wrapper">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handlePrintResult}>Print Result</button>
      </div>
      <p>Enter a value with comma (,) spereator eg. 1,23,55</p>
      {outputValue !== '' &&
        <>
          <h2>Output</h2>
          <p>{outputValue}</p>
        </>
      }

      <h2>Notes</h2>
      <ul className='notes'>
        <li>Note 1</li>
        <li>Note 2</li>
        <li>Note 3</li>
      </ul>
    </div>
  );
}

export default ChallengePage;
