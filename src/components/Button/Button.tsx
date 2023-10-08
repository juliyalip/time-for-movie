import React from "react";
import classNames from 'classnames'
import style from './Button.module.scss'

type TStyle = "primery" | "text" | "base"
type Tbutton = "submit" | "reset" | "button";

interface IProps {
  type?: Tbutton;
  onClick?: (e: any) => void;
  children: React.ReactNode;
  variant?: TStyle
}

export default function Button({ type = "submit", onClick, children, variant }: IProps) {
  return <button type={type} onClick={onClick} className={classNames(style.base,{
    [style.primary]: [variant]
  })}>
    {children}</button>;
}
