import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3 className={style.name}>Davidovich Andrei</h3>
                <div className={style.socialMedia}>
                    <span className={style.socialMediaBlock}> <a href='#'>telegram</a></span>
                    <span className={style.socialMediaBlock}> <a href='#'>LinkedIn</a></span>
                    <span className={style.socialMediaBlock}> <a href='#'>codevars</a></span>
                    <span className={style.socialMediaBlock}> <a href='#'>gitHub</a></span>
                </div>
                <div className={style.politicks}> 2022 Все права защищены</div>
            </div>
        </div>
    );
};

export default Footer;