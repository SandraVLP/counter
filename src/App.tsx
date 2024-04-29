import React, { useState, ChangeEvent } from "react";
import "./App.css";
import s from "./App.module.css";

function App() {
  const [maxValue, setMaxValue] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);
  const [count, setCount] = useState<number>(startValue);

  const handleMaxValueChange = (e: any) => {
    setMaxValue(parseInt(e.target.value, 10));
  };

  const handleStartValueChange = (e: any) => {
    setStartValue(parseInt(e.target.value, 10));
  };

  const handleIncClick = () => {
    if (count < maxValue) {
      setCount((count) => count + 1);
    }
  };

  const handleResetClick = () => {
    setCount(0);
  };

  const handleSet = () => {
    if (startValue < maxValue) {
      setMaxValue(maxValue);
      setStartValue(startValue);
      setCount(startValue);
      console.log(maxValue, startValue);
    }
  };

  const h1Classname = s.number + " " + (count === maxValue ? s.red : " ");

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
          <button type="submit" className={s.button} onClick={handleSet}>
            Set
          </button>
        </div>
      </div>
      <div className={`${s.container} ${s.outline}`}>
        <div className={`${s.container} ${s.inner} ${s.h}`}>
          {/* <input type="number" className={h1Classname} value={count}  onChange={handleCountValueChange}/> */}
          <h1 className={h1Classname}>{count}</h1>
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
          <button type="reset" className={s.button} onClick={handleResetClick}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
