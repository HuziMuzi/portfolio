import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import avatar from '../assets/image/ava.jpeg'
import Button from "../common/components/button/Button";

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>

                <div className={style.photoBlock}>
                    <img className={style.photo} src='https://www.peoples.ru/internet/blogger/khasbik/yJ3T4T31j9qIA.jpeg' alt=""/>
                </div>
                <div className={style.text}>
                    <div className={style.title}>Frontend-developer</div>
                    <h1 className={style.name}>Andrei Davidovich</h1>
                    <p className={style.aboutMe}>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis,
                        risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi.
                        Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
                        <Button>Download CV</Button>
                </div>

            </div>
        </div>
    );
};

