import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import avatar from '../assets/image/ava.jpeg'
import Button from "../common/components/button/Button";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";

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
                        <Button className={style.btnCV}>Download CV</Button>
                        <Button>About Me</Button>
                </div>

            </div>

            <div className={style.socialMedia}>
                    <span className={style.socialMediaBlock}> <a href='https://t.me/Huzi_Muzi'>
                        <FaTelegramPlane size='2em' className={style.icon}/>
                        {/*<p>telegram</p>*/}
                        </a></span>
                <span className={style.socialMediaBlock}> <a href='https://www.linkedin.com/in/andrei-davidovich-3212b8233/'>
                        <AiFillLinkedin size='2em' className={style.icon}/>
                        {/*<p>linkedin</p>*/}
                    </a></span>
                <span className={style.socialMediaBlock}> <a href='https://www.codewars.com/users/forgys17860'>
                         <SiCodewars size='2em' className={style.icon}/>
                        {/*<p>codewars</p>*/}

                    </a></span>
                <span className={style.socialMediaBlock}> <a href='https://github.com/HuziMuzi'>
                        <AiFillGithub size='2em' className={style.icon}/>
                        {/*<p>github</p>*/}
                    </a></span>
            </div>


        </div>
    );
};

