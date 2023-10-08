import React from 'react'
import {NavLink} from 'react-router-dom'
import {INavigate} from '../../data/navigate'


interface IProp{
    items: INavigate[]
}

export default function Navigate({items}: IProp){
    return(
        <nav>
            <ul>
               {items.map(({path, title})=> (
<li key={title}><NavLink to={`${path}`}>{title}</NavLink></li>
               ))}
            </ul>
        </nav>
    )
}