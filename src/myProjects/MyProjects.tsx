import React from 'react';
import style from './MyProjects.module.css'
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


    return (
        <div className={style.myProjectsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text='My Projects'/>
                <div className={style.projects}>
                    <Project
                        description={'Descriptions my project it"s very good'}
                        title={'Todo list'}
                        styles={todoListsImg}
                    />
                    <Project
                        description={'Descriptions my project it"s very good'}
                        title={'Sotial media'}
                        styles={socialMediaImg}
                    />
                    {/*<Project*/}
                    {/*    img={'картинка'}*/}
                    {/*    description={'Descriptions my project it"s very good'}*/}
                    {/*    title={'Название проекта'}*/}
                    {/*/>*/}
                    {/*<Project img={'картинка'}*/}
                    {/*         description={'Descriptions my project it"s very good'}*/}
                    {/*         title={'Название проекта'}*/}
                    {/*/>*/}
                    {/*<Project*/}
                    {/*    img={'картинка'}*/}
                    {/*    description={'Descriptions my project it"s very good'}*/}
                    {/*    title={'Название проекта'}*/}
                    {/*/>*/}
                    {/*<Project*/}
                    {/*    img={'картинка'}*/}
                    {/*    description={'Descriptions my project it"s very good'}*/}
                    {/*    title={'Название проекта'}*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    );
};

export default MyProjects;