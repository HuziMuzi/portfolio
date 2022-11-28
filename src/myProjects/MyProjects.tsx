import React from 'react';
import style from './MyProjects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Project from "./Project/Project";
import {Title} from "../common/components/title/Title";
import todo from "./../assets/image/todolists.png"
import socialMedia from "./../assets/image/sotialMedia.png"

import 'animate.css';



const MyProjects = () => {


    const todoListsImg = {
        backgroundImage: `${todo}`,
        animate: 'fadeInLeft',
        animateDelay: 0.5,
    }

    const socialMediaImg = {
        backgroundImage: `${socialMedia}`,
        animate: 'fadeInRight',
        animateDelay: 1,
    }

    const calculatorImg = {
        backgroundImage: `${todo}`,
        animate: 'fadeInLeft',
        animateDelay: 3,

    }

    const reversStyle = {
        flexDirection: 'row',
        textAlign: 'left'
    }


    return (
        <div className={style.myProjectsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text='My ' spanText={'Projects'}/>

                <div className={style.projects}>

                    <Project
                        description={'Descriptions my project it"s very good.Descriptions my project it"s very good.Descriptions my project it"s very good.Descriptions my project it"s very good'}
                        title={'Todo list'}
                        styles={todoListsImg}
                    />

                    <Project
                        description={'Descriptions my project it"s very good.Descriptions my project it"s very good'}
                        title={'Sotial media'}
                        styles={socialMediaImg}
                        positionRight={reversStyle}
                    />

                <Project
                    description={'Descriptions my project it"s very good.Descriptions my project it"s very good'}
                    title={'Calculator'}
                    styles={calculatorImg}
                />
            </div>
        </div>
</div>
)
    ;
};

export default MyProjects;