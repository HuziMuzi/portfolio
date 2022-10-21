import React from 'react';
import style from './MyProjects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import {Title} from "../common/components/title/Title";

const MyProjects = () => {
    return (
        <div className={style.myProjectsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text='My Projects'/>
                <div className={style.projects}>
                    <Project img={'картинка'}
                             description={'Descriptions my project it"s very good'}
                             title={'Название проекта'}
                    />
                    <Project
                        img={'картинка'}
                        description={'Descriptions my project it"s very good'}
                        title={'Название проекта'}
                    />
                    <Project
                        img={'картинка'}
                        description={'Descriptions my project it"s very good'}
                        title={'Название проекта'}
                    />
                    <Project img={'картинка'}
                             description={'Descriptions my project it"s very good'}
                             title={'Название проекта'}
                    />
                    <Project
                        img={'картинка'}
                        description={'Descriptions my project it"s very good'}
                        title={'Название проекта'}
                    />
                    <Project
                        img={'картинка'}
                        description={'Descriptions my project it"s very good'}
                        title={'Название проекта'}
                    />
                </div>
            </div>
        </div>
    );
};

export default MyProjects;