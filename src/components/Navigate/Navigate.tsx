import React from 'react'
import {NavLink} from 'react-router-dom'
import {INavigate} from '../../data/navigate'
import style from './Navigate.module.scss'


interface IProp{
    items: INavigate[]
}

export default function Navigate({items}: IProp){
    return(
        <nav>
            <ul className={style.list}>
               {items.map(({path, title})=> (
<li key={title} className={style.item}><NavLink to={`${path}`} className={style.link}>{title}</NavLink></li>
               ))}
            </ul>
        </nav>
    )
}