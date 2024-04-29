import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import s from "./App.module.css";

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

const h1Classname = s.number +
" " +
(count === 5 ? s.red : " ");

  return (
    <div className={s.App}>
<div className={`${s.container} ${s.outline}`}>
  <div className={`${s.container} ${s.inner} ${s.h}`}><h1 className={h1Classname}>{count}</h1></div>
  <div className={`${s.container} ${s.inner}`}>
    <button className={s.button} onClick={handleIncClick}>Inc</button>
    <button className={s.button} onClick={handleResetClick}>Reset</button> 
  </div>
</div>
    </div>
  );
}

export default App;
