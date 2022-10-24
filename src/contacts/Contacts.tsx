import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {GoLocation} from "@react-icons/all-files/go/GoLocation";
import {AiOutlinePhone} from "@react-icons/all-files/ai/AiOutlinePhone";
import {HiOutlineMail} from "@react-icons/all-files/hi/HiOutlineMail";
import {TbAd} from "react-icons/all";
import {VscAccount} from "@react-icons/all-files/vsc/VscAccount";
import Button from "../common/components/button/Button";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text='Contacts'/>
                <div className={style.contactsBlock}>
                    <div className={style.contactInfo}>
                        <ul className="list-unstyled list-info">
                            <li>
                                <div className={style.mediaBody}>
                                    <div>
                                        <span className={style.infoIcon}>
                                            <VscAccount size='2em' className={style.iLocal}/>
                                            </span>
                                    </div>
                                    <div className={style.infoDetails}>
                                        <h6 className={style.infoName}>Name</h6><span
                                        className={style.infoValue}>Andrei Davidovich</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.mediaBody}>
                                    <span className={style.infoIcon}>

                                        <GoLocation size='2em' className={style.iLocal}/>
                                    </span>
                                    <div className="media-body info-details">
                                        <h6 className={style.infoName}>Location</h6>
                                        <span className={style.infoValue}>
                                            Belarus, Minsk</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.mediaBody}><span className={style.infoIcon}>

                                    <AiOutlinePhone size='2em' className={style.iLocal}/>
                                </span>
                                    <div className="media-body info-details">
                                        <h6 className={style.infoName}>Call Me</h6>
                                        <span className={style.infoValue}>
                                            <a
                                                href="tel:+375295415765">+375 29 5415765</a>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.mediaBody}>
                                    <span className={style.infoIcon}>
                                <HiOutlineMail size='2em' className={style.iLocal}/>

                                </span>
                                    <div className="media-body info-details">
                                        <h6 className={style.infoName}>Email Me</h6><span className={style.infoValue}><a
                                        href="laif17860@mail.ru">laif17860@mail.ru</a></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <form className={style.form} action="#">
                        <input type="text" placeholder='What is your name?'/>
                        <input type="email" placeholder='Your email'/>
                        <textarea name="" id=""></textarea>
                    </form>
                </div>
                <Button >Send Message</Button>
            </div>
        </div>
    );
};

export default Contacts;