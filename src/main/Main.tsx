import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h1 className={style.name}>Andrei Davidovich</h1>
                    <p className={style.aboutMe}>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
                        convallis,</p>

                </div>
                <div className={style.photo}>photo</div>
            </div>
        </div>
    );
};

