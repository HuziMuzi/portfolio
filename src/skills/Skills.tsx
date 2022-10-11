import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


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
                <h2 className={style.title}>What I Do</h2>
                <div className={style.skills}>
                    {skills.map(skill => <Skill
                        title={skill.title}
                        description={skill.description}
                        icon={skill.icon}/> )}
                </div>
            </div>
        </div>
    );
};
