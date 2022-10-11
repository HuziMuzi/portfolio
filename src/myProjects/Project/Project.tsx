import React, {FC} from 'react';
import style from './Project.module.css'

type projectPropsType = {
    title: string
    img : string
    description: string
}

const Project:FC<projectPropsType> = ({title,img,description}) => {
    return (
        <div className={style.projectBlock}>
            <div className={style.imgBlock}>
                <div className={style.img}>{img}</div>
                <button className={style.btn}>Смотреть</button>
            </div>
            <div className={style.textBlock}>
                <h4 className={style.title}>{title}</h4>
                <p className={style.description}>{description}</p>
            </div>

        </div>
    );
};

export default Project;