import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.scss'
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";

const Footer = () => {


    const sizeIcon = {
        width: '22px',
        height: '22px'
    }

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.socialMedia}>
                    <span className={style.socialMediaBlock}> <a href='https://t.me/Huzi_Muzi'>
                        <FaTelegramPlane style={sizeIcon} className={style.icon}/>
                        <p>telegram</p>
                        </a></span>
                    <span className={style.socialMediaBlock}> <a href='https://www.linkedin.com/in/andrei-davidovich-3212b8233/'>
                        <AiFillLinkedin style={sizeIcon} className={style.icon}/>
                        <p>linkedin</p>
                    </a></span>
                    <span className={style.socialMediaBlock}> <a href='https://www.codewars.com/users/forgys17860'>
                         <SiCodewars style={sizeIcon} className={style.icon}/>
                        <p>codewars</p>

                    </a></span>
                    <span className={style.socialMediaBlock}> <a href='https://github.com/HuziMuzi'>
                        <AiFillGithub style={sizeIcon} className={style.icon}/>
                        <p>github</p>
                    </a></span>
                </div>
                <div className={style.politicks}> 2022 Все права защищены</div>
            </div>
        </div>
    );
};

export default Footer;