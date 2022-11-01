import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3 className={style.name}>Davidovich Andrei</h3>
                <div className={style.socialMedia}>
                    <span className={style.socialMediaBlock}> <a href='https://t.me/Huzi_Muzi'>
                        <FaTelegramPlane size='3em' className={style.icon}/>
                        </a></span>
                    <span className={style.socialMediaBlock}> <a href='https://www.linkedin.com/in/andrei-davidovich-3212b8233/'>
                        <AiFillLinkedin size='3em' className={style.icon}/>
                    </a></span>
                    <span className={style.socialMediaBlock}> <a href='https://www.codewars.com/users/forgys17860'>
                         <SiCodewars size='3em' className={style.icon}/>
                    </a></span>
                    <span className={style.socialMediaBlock}> <a href='https://github.com/HuziMuzi'>
                        <AiFillGithub size='3em' className={style.icon}/>
                    </a></span>
                </div>
                <div className={style.politicks}> 2022 Все права защищены</div>
            </div>
        </div>
    );
};

export default Footer;