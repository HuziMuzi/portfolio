import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text='Contacts'/>
                {/*<h3 className={style.title}>Контакты</h3>*/}

                <form className={style.form} action="#">
                    <input type="text" placeholder='What is your name?'/>
                    <input type="email" placeholder='Your email'/>
                    <textarea name="" id="" ></textarea>
                </form>
                <button className={style.btn}>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;