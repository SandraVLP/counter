import React, { useState } from "react";
import "./App.css";
import s from "./App.module.css";

function App() {
  const [maxValue, setMaxValue] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>("enter values and press set");
  const errorMessage = 'Incorrect value';

  const handleMaxValueChange = (e: any) => {
    if (e.currentTarget.value < 0) {
      setMessage('Incorrect value')
    }
    setMaxValue(parseInt(e.currentTarget.value, 10));
  };

  const handleStartValueChange = (e: any) => {
    if (e.currentTarget.value < 0) {
      setMessage(errorMessage)
    }
    setStartValue(parseInt(e.currentTarget.value, 10));
  };

  const handleIncClick = () => {
    if (count < maxValue) {
      setCount((count) => count + 1);
    }
  };

  const handleResetClick = () => {
    setCount(startValue);
  };

  const handleSet = () => {
    if (startValue < maxValue) {
      setMaxValue(maxValue);
      setStartValue(startValue);
      setCount(startValue);
    }
  };

  const h1Number = s.number + " " + (count === maxValue ? s.red : " ");
  const h1Message = s.message + " " + (message === errorMessage ? s.red : " ");
  return (
    <div className={s.App}>
      <div className={`${s.container} ${s.outline}`}>
        <div className={`${s.container} ${s.inner} ${s.h} ${s.outline}`}>
          <label htmlFor="maxvalue" className={s.label}>
            max-value:{" "}
            <input
              className={s.input}
              type="number"
              id="maxvalue"
              onChange={handleMaxValueChange}
              value={maxValue}
            />
          </label>
          <label htmlFor="startvalue" className={s.label}>
            start-value:{" "}
            <input
              className={s.input}
              type="number"
              id="startvalue"
              value={startValue}
              onChange={handleStartValueChange}
            />
          </label>
        </div>
        <div className={`${s.container} ${s.inner}`}>
          <button disabled={message === errorMessage} type="submit"   className={`${s.button} ${message === errorMessage ? s.disabled : ""}`} onClick={handleSet}>
            Set
          </button>
        </div>
      </div>
      <div className={`${s.container} ${s.outline}`}>
        <div className={`${s.container} ${s.inner} ${s.h}`}>
          {count < 1 ? (
            <h1 className={h1Message}>{message}</h1>
          ) : (
            <h1 className={h1Number}>{count}</h1>
          )}
        </div>
        <div className={`${s.container} ${s.inner}`}>
          <button
            disabled={count === maxValue}
            type="button"
            className={`${s.button} ${count === maxValue ? s.disabled : ""}`}
            onClick={handleIncClick}
          >
            Inc
          </button>
          <button
            disabled={count === 0}
            type="reset"
            className={`${s.button} ${count === 0 ? s.disabled : ""}`}
            onClick={handleResetClick}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
