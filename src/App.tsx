import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [count, setCount] = useState<number>(0);

const handleIncClick = () =>{
  if (count < 5) {
    setCount(count + 1)
  }
}

const handleResetClick = () => {
  setCount(0)
}

  return (
    <div className="App">
<div className='counter-container'>
  <div className='count'><h1>{count}</h1></div>
  <div className='calc-container'>
    <button onClick={handleIncClick}>Inc</button>
    <button onClick={handleResetClick}>Reset</button> 
  </div>
</div>
    </div>
  );
}

export default App;
