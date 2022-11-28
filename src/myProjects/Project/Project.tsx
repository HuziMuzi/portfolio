import React, {FC} from 'react';
import style from './Project.module.scss'
import Button from "../../common/components/button/Button";


type projectPropsType = {
    title: string
    description: string
    styles: {
        backgroundImage: string
        animate: string,
        animateDelay: number
    }
    positionRight?: any
}

const Project: FC<projectPropsType> = ({title, description, styles, positionRight}) => {


    return (
        <div className={`${style.projectBlock} animate__animated animate__${styles.animate} animate__delay-${styles.animateDelay}s`} style={positionRight}>

            <div style={styles} className={style.imgBlock}>
                <img src={styles.backgroundImage} className={style.image} alt='img'/>
                <div className={style.shadow}>
                    <Button className={style.btn}>Смотреть</Button>

                </div>
            </div>
            <div className={style.textBlock} style={positionRight}>
                <h4 className={style.title}>{title}</h4>
                <p className={style.description}>{description}</p>
            </div>
        </div>
    );
};

export default Project;