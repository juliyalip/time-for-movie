import React from 'react'

import style from './MovieItem.module.scss'

export interface IMovie {
  id: number;
  title: string;
  popularity: number;
  release_date: string;
  poster_path: string;
}

interface IProp {
  item: IMovie;
}

export default function MovieItem({ item }: IProp) {
  return (
    <li className={style.container}>
      <p className={style.title}>{item.title}</p>
      <span>release: {item.release_date}</span>
    </li>
  );
}
