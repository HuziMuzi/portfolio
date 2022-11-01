import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";


export const Skills = () => {
    const skills = [
        {
            id: 1,
            title: 'React',
            description: 'Hello big world. I;m happy',
            icon: ''
        },
        {
            id: 1,
            title: 'js',
            description: 'Hello big world. I;m happy',
            icon: ''
        },
        {
            id: 1,
            title: 'React',
            description: 'Hello big world. I;m happy',
            icon: ''
        },
        {
            id: 1,
            title: 'js',
            description: 'Hello big world. I;m happy',
            icon: ''
        },
        {
            id: 1,
            title: 'React',
            description: 'Hello big world. I;m happy',
            icon: ''
        },
        {
            id: 1,
            title: 'React',
            description: 'Hello big world. I;m happy',
            icon: ''
        },
    ]


    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text='What I do'/>
                <div className={style.skills}>
                    {skills.map(skill => <Skill
                        title={skill.title}
                        description={skill.description}
                        icon={skill.icon}/>)}
                </div>
            </div>
        </div>
    );
};
