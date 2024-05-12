import React, { useState } from "react";
import "./App.css";
import s from "./App.module.css";
import { Button } from "./Button";
import { Input } from "./Input";

function App() {
  const [maxValue, setMaxValue] = useState<number>(0);
  const [startValue, setStartValue] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>("enter values and press set");
  const errorMessage = "Incorrect value";
  const [isSetClicked, setClicked] = useState(false);

  const handleMaxValueChange = (e: any) => {
    let value = parseInt(e.currentTarget.value, 10); 

    if (value < 0) {
        setMessage(errorMessage);
    } else {
        setMessage("enter values and press set");
    }

    setMaxValue(value);
  };

  const handleStartValueChange = (e: any) => {
    let value = parseInt(e.currentTarget.value, 10); 

    if (value < 0) {
        setMessage(errorMessage);
    } else {
        setMessage("enter values and press set");
    }
    setStartValue(value);
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
          <Input htmlFor="maxvalue" className={inputMaxClassname} id="maxvalue" onChange={handleMaxValueChange} value={maxValue} title="max-value:"/>
          <Input htmlFor="startvalue" className={inputStartClassname} id="startvalue" onChange={handleStartValueChange} value={startValue} title="start-value:"/>
        </div>
        <div className={`${s.container} ${s.inner}`}>
          <Button
            btntype="submit"
            onClick={handleSet}
            disabled={startValue < 0 || startValue >= maxValue || maxValue < 0}
            className={
              startValue < 0 || startValue >= maxValue || maxValue < 0
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
