import React from "react";
import style from './Container.module.scss'

interface IProp {
  children: React.ReactNode;
  width?: string;
}

export default function Container({ children, width = "1200px" }: IProp) {
  return <div className={style.baseStyle} style={{ width }}>{children}</div>;
}
