import React from 'react';
import style from './TitlePopUp.module.scss'



type TTitlePopUpProps = {
    text : string,
    spanText: string
}


const TitlePopUp = ({text, spanText} : TTitlePopUpProps) => {
    return (
        <div className={style.title}>{text} <span>{spanText}</span> </div>
    );
};

export default TitlePopUp;