import React from "react";
import s from "./App.module.css";

type PropsType = {
  onClick: () => void;
  disabled: boolean;
  className: string;
  title: string;
  btntype: "submit" | "reset" | "button" | undefined;
};

export const Button = (props: PropsType) => {
  return (
    <button
      disabled={props.disabled}
      type={props.btntype}
      className={`${s.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};
