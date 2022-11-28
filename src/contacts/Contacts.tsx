import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/title/Title";
import Button from "../common/components/button/Button";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text='Get in ' spanText={'Touch'}/>
                <div className={style.contactsContainer}>
                    <form className={style.form} action="#">
                        {/*<h4 className={style.formTitle}>Message me</h4>*/}
                        <input type="text" placeholder='What is your name?'/>
                        <input type="email" placeholder='Your email'/>
                        <textarea name="" id="" placeholder='Message'></textarea>
                    </form>

                    {/*<div className={style.contactInfo}>*/}
                    {/*    /!*<h4 className={style.contactTitle}>Contact info</h4>*!/*/}
                    {/*    <div className={style.contactBlocks}>*/}
                    {/*        <div className={style.contactBlockLeft}>*/}
                    {/*            <div className={style.mediaBody}>*/}
                    {/*                <div>*/}
                    {/*                    <span className={style.infoIcon}>*/}
                    {/*                        <VscAccount size='2em' className={style.iLocal}/>*/}
                    {/*                        </span>*/}
                    {/*                </div>*/}
                    {/*                <div className={style.infoDetails}>*/}
                    {/*                    <h6 className={style.infoName}>Name</h6><span*/}
                    {/*                    className={style.infoValue}>Andrei Davidovich</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className={style.mediaBody}>*/}
                    {/*                <span className={style.infoIcon}>*/}
                    {/*                    <GoLocation size='2em' className={style.iLocal}/>*/}
                    {/*                </span>*/}
                    {/*                <div className={style.infoDetails}>*/}
                    {/*                    <h6 className={style.infoName}>Location</h6>*/}
                    {/*                    <span className={style.infoValue}>*/}
                    {/*                        Belarus, Minsk</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <div className={style.mediaBody}><span className={style.infoIcon}>*/}

                    {/*                <AiOutlinePhone size='2em' className={style.iLocal}/>*/}
                    {/*            </span>*/}
                    {/*                <div className={style.infoDetails}>*/}
                    {/*                    <h6 className={style.infoName}>Call Me</h6>*/}
                    {/*                    <span className={style.infoValue}>*/}
                    {/*                        <a href="tel:+375295415765">+375 29 5415765</a>*/}
                    {/*                    </span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*            <div className={style.mediaBody}>*/}
                    {/*                <span className={style.infoIcon}>*/}
                    {/*            <HiOutlineMail size='2em' className={style.iLocal}/>*/}
                    {/*            </span>*/}
                    {/*                <div className={style.infoDetails}>*/}
                    {/*                    <h6 className={style.infoName}>Email Me</h6><span className={style.infoValue}><a*/}
                    {/*                    href="laif17860@mail.ru">laif17860@mail.ru</a></span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*</div>*/}

                </div>
                <Button>Send Message</Button>
            </div>
        </div>
    );
};

export default Contacts;