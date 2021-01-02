import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/"+ props.id
    return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>
            <img src="https://infoznaki.ru/wa-data/public/shop/products/75/09/975/images/7038/7038.970.png" alt=""/>
            {props.name}
        </NavLink>
    </div>)
}

export default DialogItem