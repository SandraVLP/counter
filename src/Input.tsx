import React from 'react'
import s from "./App.module.css";

type PropsType = {
    className: string
    id: string
    htmlFor: string
    onChange: (e:  React.ChangeEvent<HTMLInputElement>) => void
    value: number
    title: string
}

export const Input = (props: PropsType) => {
  return (
            <label htmlFor={props.htmlFor} className={s.label}>
            {props.title}
            <input
              className={props.className}
              type="number"
              id="maxvalue"
              onChange={props.onChange}
              value={props.value}
            />
          </label>
  )
}
