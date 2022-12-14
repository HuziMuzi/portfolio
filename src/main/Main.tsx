import React, {useState} from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import avatar from '../assets/image/avatar.jpg'
import Button from "../common/components/button/Button";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import {motion} from "framer-motion";
import {PopUpMe} from "./popUp/PopUpMe";

import 'animate.css';


export const Main = () => {
    const [showPop, setShowPop] = useState(false)


    const animateBlock = {
        whileHover: {scale: 1.05},
        transition: {type: "spring", stiffness: 400, damping: 5}
    }
    const socialMediaData = [
        {
            id: 1,
            link: 'https://t.me/Huzi_Muzi',
            icon: <FaTelegramPlane size='2em'/>
        },
        {
            id: 2,
            link: 'https://www.linkedin.com/in/andrei-davidovich-3212b8233',
            icon: <AiFillLinkedin size='2em'/>
        },
        {
            id: 3,
            link: 'https://www.codewars.com/users/forgys17860',
            icon: <SiCodewars size='2em'/>
        },
        {
            id: 4,
            link: 'https://github.com/HuziMuzi',
            icon: <AiFillGithub size='2em'/>
        },
    ]


    const showPopUp = () => {
        setShowPop(true)
    }

    return (
        // <PopUpMe/>
        <div
            className={style.mainBlock}>

            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.contentBlock}>

                    {
                        showPop ? <PopUpMe setShowPop={setShowPop}/>
                            :
                            <div className={`${style.content} animate__animated animate__fadeInUp`}>
                                <div className={style.photoBlock}>
                                    <img className={style.photo}
                                         src={avatar} alt=""/>
                                </div>
                                <div className={style.text}>
                                    <div className={style.titleBlock}>
                                        <h1 className={style.name}>Andrei <span>Davidovich</span></h1>
                                        <div className={style.title}>Frontend <span>Developer</span></div>

                                    </div>

                                    <p className={`${style.aboutMe} `}>Hello everybody! I am a person who has a strong
                                        passion
                                        for
                                        programming. I have experience in creating SPA with React/Redux/TypeScript. Now
                                        I am
                                        improving my skills in this direction and expanding</p>

                                    <div className={style.buttons}>
                                        <motion.div{...animateBlock}>
                                            <Button className={style.btnCV}>
                                                <a href='https://drive.google.com/file/d/1JIchckNViydFoBVnJXgqc2-SZR8VAiUC/view'
                                                   target="_blank">
                                                    Download CV
                                                </a>
                                            </Button>
                                        </motion.div>
                                        <motion.div{...animateBlock}>
                                            <Button onClick={showPopUp}>About Me</Button>
                                        </motion.div>
                                    </div>

                                </div>
                            </div>
                    }
                </div>

            </div>


            <div className={style.socialMedia}>
                {/*<Bounce cascade delay={700}>*/}

                    {socialMediaData.map(item =>
                        <div className={style.socialMediaWrapper}>
                            <span className={style.socialMediaBlock}><a href={item.link}>
                                <div className={style.icon}>
                                {item.icon}</div></a>
                         </span>
                        </div>
                    )}
                {/*</Bounce>*/}

            </div>
        </div>
    )
}