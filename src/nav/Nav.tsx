import React from 'react';
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink className={style.link} to="/">About Me</NavLink>
            <NavLink className={style.link} to="/skill">Skill</NavLink>
            <NavLink className={style.link} to="/portfolio">Portfolio</NavLink>
            <NavLink className={style.link} to="/contact">Contact</NavLink>
        </div>
    );
};

