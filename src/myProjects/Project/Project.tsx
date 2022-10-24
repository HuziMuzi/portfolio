import React, {FC} from 'react';
import style from './Project.module.scss'
import Button from "../../common/components/button/Button";

type projectPropsType = {
    title: string
    description: string
    styles?: {
        backgroundImage:string
    }
}

const Project:FC<projectPropsType> = ({title,description,styles}) => {
    return (
        <div className={style.projectBlock}>
            <div style={styles} className={style.imgBlock}>
                <Button>Смотреть</Button>
            </div>
            <div className={style.textBlock}>
                <h4 className={style.title}>{title}</h4>
                <p className={style.description}>{description}</p>
            </div>

        </div>
    );
};

export default Project;