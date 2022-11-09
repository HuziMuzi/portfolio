import React, {FC} from 'react';
import style from './Project.module.scss'
import Button from "../../common/components/button/Button";
import {motion} from "framer-motion";


type projectPropsType = {
    title: string
    description: string
    styles: {
        backgroundImage: string
    }
    positionRight?: any
}

const Project: FC<projectPropsType> = ({title, description, styles, positionRight}) => {


    return (
        <div className={`${style.projectBlock}`} style={positionRight}>

            <div style={styles} className={style.imgBlock}>
                <img src={styles.backgroundImage} className={style.image}/>
                <div className={style.shadow}>
                    <Button className={style.btn}>Смотреть</Button>

                </div>
            </div>
            <div className={style.textBlock} style={positionRight}>
                <h4 className={style.title}>{title}</h4>
                <p className={style.description}>{description}</p>
            </div>

            {/*<img src={styles ? styles.backgroundImage : ''} alt="img" className={style.imgBlock}/>*/}

            {/*<ul className={style.hoverEffect}>*/}
            {/*    <li>*/}

            {/*        <img src={styles ? styles.backgroundImage : ''} alt="img" className={style.imgBlock}/>*/}

            {/*        <div className={style.textBlock}>*/}
            {/*            <h4 className={style.title}>{title}</h4>*/}
            {/*            <p>{description}</p>*/}
            {/*            <Button className={style.btn}>Смотреть</Button>*/}
            {/*        </div>*/}

            {/*<div style={styles} className={style.imgBlock}>*/}
            {/*    <Button>Смотреть</Button>*/}
            {/*</div>*/}
            {/*<div className={style.textBlock}>*/}
            {/*    <h4 className={style.title}>{title}</h4>*/}
            {/*    <p className={style.description}>{description}</p>*/}
            {/*</div>*/}
            {/*</li>*/}
            {/*</ul>*/}
        </div>
    );
};

export default Project;