import React, { useState } from "react";
import "./App.css";
import s from "./App.module.css";
import { Button } from "./Button";

function App() {
  const [maxValue, setMaxValue] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>("enter values and press set");
  const errorMessage = "Incorrect value";
  const [isSetClicked, setClicked] = useState(false);

  const handleMaxValueChange = (e: any) => {
    if (e.currentTarget.value < 0) {
      setMessage("Incorrect value");
    }
    setMaxValue(parseInt(e.currentTarget.value, 10));
  };

  const handleStartValueChange = (e: any) => {
    if (e.currentTarget.value < 0) {
      setMessage(errorMessage);
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
      setClicked(true);
    }
  };

  const h1Number = s.number + " " + (count === maxValue ? s.red : " ");
  const h1Message = s.message + " " + (message === errorMessage ? s.red : " ");
  const inputStartClassname = s.input + " " + (startValue < 0 ? s.error : " ");
  const inputMaxClassname = s.input + " " + (maxValue < 0 ? s.error : " ");
  return (
    <div className={s.App}>
      <div className={`${s.container} ${s.outline}`}>
        <div className={`${s.container} ${s.inner} ${s.h} ${s.outline}`}>
          <label htmlFor="maxvalue" className={s.label}>
            max-value:{" "}
            <input
              className={inputMaxClassname}
              type="number"
              id="maxvalue"
              onChange={handleMaxValueChange}
              value={maxValue}
            />
          </label>
          <label htmlFor="startvalue" className={s.label}>
            start-value:{" "}
            <input
              className={inputStartClassname}
              type="number"
              id="startvalue"
              value={startValue}
              onChange={handleStartValueChange}
            />
          </label>
        </div>
        <div className={`${s.container} ${s.inner}`}>
          <Button
            btntype="submit"
            onClick={handleSet}
            disabled={message === errorMessage || startValue >= maxValue}
            className={
              message === errorMessage || startValue >= maxValue
                ? s.disabled
                : ""
            }
            title="Set"
          />
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
        <Button
            btntype="button"
            onClick={handleIncClick}
            disabled={count === maxValue || !isSetClicked}
            className={
              count === maxValue || !isSetClicked ? s.disabled : ""
            }
            title="Inc"
          />
        <Button
            btntype="reset"
            onClick={handleResetClick}
            disabled={!isSetClicked}
            className={
              !isSetClicked ? s.disabled : ""
            }
            title="Reset"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
