import React from 'react';
import style from './Title.module.scss'

type TitlePropsType = {
    text: string
    spanText? : string
}

export const Title = ({text,spanText, ...props}: TitlePropsType) => {
    return (
        <div className={style.titleBlock}>
            <div className={style.title}>
                <h2 >{text} <span>{spanText}</span></h2>
                <div className={style.animatedBar}></div>
            </div>
        </div>
    );
};
