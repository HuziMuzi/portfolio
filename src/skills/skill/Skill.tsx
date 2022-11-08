import React from 'react';
import style from './Skill.module.scss'

type skillTypeProps = {
    icon:JSX.Element | string
    title: string
    description : string
    // styleColor? : string
    span? : string

}
// props.styleColor ? `${style.iconBlock} ${props.styleColor}`  :
export const Skill = (props:skillTypeProps) => {
    return (
        <div className={style.skillBlock}>
            <div className={`${style.iconBlock}`}>
                <div className={style.icon}>{props.icon}</div>

            </div>
            <h3 className={style.title}>{props.title}
                <br/> <span>{props.span} </span>
            </h3>
            {/*<p className={style.description}>{props.description}</p>*/}
        </div>
    );
};

