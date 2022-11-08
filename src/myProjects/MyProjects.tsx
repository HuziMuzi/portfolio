import React from 'react';
import style from './MyProjects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import {Title} from "../common/components/title/Title";
import todo from "./../assets/image/todolists.png"
import socialMedia from "./../assets/image/sotialMedia.png"
import calculator from "./../assets/image/calculator.jpeg"


const MyProjects = () => {

    const socialMediaImg = {
        backgroundImage: `url(${socialMedia})`
    }
    const todoListsImg = {
        backgroundImage: `url(${todo})`
    }
    const calculatorImg = {
        backgroundImage: `url(${todo})`
    }

    const reversStyle = {
        flexDirection : 'row-reverse',
        textAlign: 'left'
    }


    return (
        <div className={style.myProjectsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text='My ' spanText={'Projects'}/>
                <div className={style.projects}>
                    <Project
                        description={'Descriptions my project it"s very good.Descriptions my project it"s very good'}
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
    );
};

export default MyProjects;