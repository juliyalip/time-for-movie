import React from "react";
import classNames from 'classnames'
import style from './Button.module.scss'

type TStyle = "primery" | "text" | "base"
type Ttype = "submit" | "reset" | "button";

interface IProps {
  type?: Ttype;
  onClick?: (e: any) => void
  children: React.ReactNode
  variant?: TStyle,
  disabled: boolean
}

export default function Button({ type = "submit", onClick, children, variant, disabled}: IProps) {
  return <button type={type} disabled={disabled}onClick={onClick} className={classNames(style.base,{
    [style.primary]: variant
  })}>
    {children}</button>;
}
