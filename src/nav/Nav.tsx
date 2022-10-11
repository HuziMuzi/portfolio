import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.link} href="#">Главное</a>
            <a className={style.link} href="#">Скилы</a>
            <a className={style.link} href="#">Работы</a>
            <a className={style.link} href="#">Контакты</a>
        </div>
    );
};

