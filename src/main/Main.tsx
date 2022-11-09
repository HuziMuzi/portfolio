import React, {useEffect, useRef} from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import avatar from '../assets/image/ava.jpeg'
import Button from "../common/components/button/Button";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import {VscAccount} from "@react-icons/all-files/vsc/VscAccount";
import {motion} from "framer-motion";

import {Bounce, Fade} from "react-awesome-reveal";
import {PopUpMe} from "./popUp/PopUpMe";


type MainPropsType = {
    setShowPop : (value : boolean) => void
}

export const Main = (props: MainPropsType) => {


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

    // const iconSocialMediaAnimation = {
    //     hidden: {
    //         x: 100,
    //         opacity: 0,
    //     },
    //     visible: {
    //         x: 0,
    //         opacity: 1,
    //         transition: {delay: 0.5}
    //     }
    // }
    //
    // const contentAnimation = {
    //     hidden: {
    //         y: 20,
    //         opacity: 0,
    //     },
    //     visible: {
    //         y: 10,
    //         // duration: .2,
    //         opacity: 1,
    //         transition: {
    //             delay: 0.1,
    //             ease: 'linear',
    //             // times: [0, 0.2, 1]
    //         }
    //     },
    //
    // }


    const showPopUp = () => {
        props.setShowPop(true)
    }

    return (
        // <PopUpMe/>
        <div
            // initial='hidden'
            // animate='visible'
            // variants={contentAnimation}
            className={style.mainBlock}>
            <Fade>

                <div className={`${styleContainer.container} ${style.container}`}>

                    <div className={style.photoBlock}>
                        <img className={style.photo}
                             src='https://www.peoples.ru/internet/blogger/khasbik/yJ3T4T31j9qIA.jpeg' alt=""/>
                    </div>
                    <div className={style.text}>
                        <div className={style.title}>Frontend-developer</div>
                        <h1 className={style.name}>Andrei <span>Davidovich</span></h1>
                        <p className={style.aboutMe}>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
                            convallis,
                            risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi.
                            Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>

                        <div className={style.buttons}>
                            <motion.div{...animateBlock}>
                                <Button className={style.btnCV}>Download CV</Button>
                            </motion.div>
                            <motion.div{...animateBlock}>
                                <Button onClick={showPopUp}>About Me</Button>
                            </motion.div>

                        </div>

                    </div>

                </div>
            </Fade>
            <div className={style.socialMedia}>
                <Bounce cascade delay={700}>

                    {socialMediaData.map(item => <div
                        // variants={iconSocialMediaAnimation}
                    >
                    <span className={style.socialMediaBlock}>
                        <a href={item.link}>
                            <div className={style.icon}>
                                {item.icon}
                            </div>
                        </a>
                </span>
                    </div>)}

                </Bounce>

            </div>
        </div>
    )
}