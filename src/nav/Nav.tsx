import React from 'react';
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink className={({ isActive }) =>
                isActive ? style.active : style.link} to="/">About Me</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? style.active : style.link} to="/skill">Skill</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? style.active : style.link} to="/portfolio">Portfolio</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? style.active : style.link} to="/contact">Contact</NavLink>
        </div>
    );
};



// className={({ isActive }) =>
// isActive ? activeClassName : undefined
// }