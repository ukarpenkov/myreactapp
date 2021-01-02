import React from 'react';
import s from './../Sidebar.module.css'
import {NavLink} from "react-router-dom";


const SideItem = (props) => {
    return (
    <div className={s.side}>
        <NavLink to=''>
            <div className={s.item}>
            <img src="https://infoznaki.ru/wa-data/public/shop/products/75/09/975/images/7038/7038.970.png" alt=""/>
            {props.name}
            </div>
        </NavLink>
    </div>)
}

export default SideItem