import React from 'react';
import style from './Title.module.css'

type TitlePropsType = {
    text: string
}

export const Title = ({text, ...props} : TitlePropsType) => {
    return (
        <div className={style.title}>
            <h2>{text}</h2>
            <div className={style.animatedBar}></div>
        </div>
    );
};
