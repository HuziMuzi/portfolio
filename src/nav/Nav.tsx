import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.link} href="#">About Me</a>
            <a className={style.link} href="#">Skill</a>
            <a className={style.link} href="#">Portfolio</a>
            <a className={style.link} href="#">Contact</a>
        </div>
    );
};

