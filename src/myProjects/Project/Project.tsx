import React, {FC} from 'react';
import style from './Project.module.scss'
import Button from "../../common/components/button/Button";

type projectPropsType = {
    title: string
    description: string
    styles?: {
        backgroundImage: string
    }
}

const Project: FC<projectPropsType> = ({title, description, styles}) => {
    return (
        <div className={style.projectBlock}>
            <ul className={style.hoverEffect}>
                <li>

                    <img src={styles ? styles.backgroundImage : ''} alt="img" className={style.imgBlock}/>
                    {/*<div style={styles} className={style.imgBlock}>*/}
                    {/*    <Button>Смотреть</Button>*/}
                    {/*</div>*/}
                    <div className={style.textBlock}>
                        <h4 className={style.title}>{title}</h4>
                        <p>{description}</p>
                        <Button className={style.btn}>Смотреть</Button>
                    </div>
                {/*<div style={styles} className={style.imgBlock}>*/}
                {/*    <Button>Смотреть</Button>*/}
                {/*</div>*/}
                {/*<div className={style.textBlock}>*/}
                {/*    <h4 className={style.title}>{title}</h4>*/}
                {/*    <p className={style.description}>{description}</p>*/}
                {/*</div>*/}
                </li>
            </ul>
        </div>
    );
};

export default Project;