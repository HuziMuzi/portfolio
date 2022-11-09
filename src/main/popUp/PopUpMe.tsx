import React from 'react';
import style from "./PopUpMe.module.scss";
import {VscAccount} from "@react-icons/all-files/vsc/VscAccount";
import {GoLocation} from "@react-icons/all-files/go/GoLocation";
import {AiOutlinePhone} from "@react-icons/all-files/ai/AiOutlinePhone";
import {HiOutlineMail} from "@react-icons/all-files/hi/HiOutlineMail";
import {Fade} from "react-awesome-reveal";


type PopUpMeType = {
    setShowPop : (value : boolean) => void
}

export const PopUpMe = (props : PopUpMeType) => {

    const socialMediaData = [
        {
            icon:  <VscAccount size='2em'/> ,
            name : 'Andrei Davidovich'
        },
        {
            icon:  <GoLocation size='2em'/> ,
            name : 'Belarus, Minsk'
        },
        {
            icon:  <AiOutlinePhone size='2em'/> ,
            name : '+375295415765'
        },
        {
            icon:    <HiOutlineMail size='2em'/>,
            name : 'laif17860@mail.ru'
        },
    ]


    const closePopUp = () => {
        props.setShowPop(false)
    }

    return (
        <Fade>
        <div className={style.popUp}>
            <div className={style.popUpContainer}>
                <div  onClick={closePopUp}  className={style.btnPop} >
                    x
                    {/*<a  className={style.btnPop}  href="#">x</a>*/}
                </div>
                <div className={style.contentBlock}>
                    <div className={style.contactInfoBlock}>
                        <div className={style.author}>
                            <div className={style.imgPop}>
                                <img className={style.img}
                                     src='https://www.peoples.ru/internet/blogger/khasbik/yJ3T4T31j9qIA.jpeg'
                                     alt="ava"/></div>
                            <div className={style.popName}>Andrei <span>Davidovich</span></div>
                            <div className={style.contactInfo}>
                                <div className={style.contactBlocks}>
                                    {/*<div className={style.contactBlockLeft}>*/}
                                    {
                                        socialMediaData.map(item => <div className={style.mediaBody}>
                                            <span className={style.infoIcon}>
                                               {item.icon}
                                                </span>
                                            <div className={style.infoDetails}>
                                                <h6 className={style.infoName}>{item.name}</h6>
                                                {/*<span className={style.infoValue}>Andrei Davidovich</span>*/}
                                            </div>
                                        </div> )

                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.aboutMeBlock}>
                        <div>
                            About me
                        </div>
                        <p>
                            Hello everybody! My name is David Parker. I am a graphic designer, and I'm very
                            passionate
                            and dedicated to my work.
                            With 20 years experience as a professional a graphic designer,
                            I have acquired the skills and knowledge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    );
};
