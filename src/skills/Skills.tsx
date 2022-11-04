import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {SiJavascript} from "@react-icons/all-files/si/SiJavascript";
import {SiTypescript} from "@react-icons/all-files/si/SiTypescript";
import {IoLogoHtml5} from "@react-icons/all-files/io5/IoLogoHtml5";
import {DiCss3} from "@react-icons/all-files/di/DiCss3";
import {FaReact} from "@react-icons/all-files/fa/FaReact";
import {SiRedux} from "@react-icons/all-files/si/SiRedux";
import {DiGitBranch} from "@react-icons/all-files/di/DiGitBranch";
import {DiSass} from "@react-icons/all-files/di/DiSass";
import {SiMaterialUi} from "@react-icons/all-files/si/SiMaterialUi";


export const Skills = () => {

    const styleIcons = {
        size: '4em',

    }

    const skills = [
        {
            id: 1,
            title: 'JavaScript',
            description: 'Hello big world. I;m happy',
            icon: <SiJavascript {...styleIcons} color={'#ead41c'}/>
        },
        {
            id: 2,
            title: 'TypeScript',
            description: 'Hello big world. I;m happy',
            icon: <SiTypescript  {...styleIcons} color={'#2f74c0'}/>
        },
        {
            id: 3,
            title: 'HTML5',
            description: 'Hello big world. I;m happy',
            icon: <IoLogoHtml5 {...styleIcons} color={'#e56028'}/>
        },
        {
            id: 1,
            title: 'CSS3',
            description: 'Hello big world. I;m happy',
            icon: <DiCss3 {...styleIcons} color={'#136cae'}/>
        },
        {
            id: 1,
            title: 'React',
            description: 'Hello big world. I;m happy',
            icon: <FaReact {...styleIcons} color={'#5ccfee'}/>
        },
        {
            id: 1,
            title: 'Redux',
            description: 'Hello big world. I;m happy',
            icon: <SiRedux {...styleIcons} color={'#7046b2'}/>
        },
        {
            id: 1,
            title: 'git',
            description: 'Hello big world. I;m happy',
            icon: <DiGitBranch {...styleIcons} color={'#e44c30'}/>
        },
        {
            id: 1,
            title: 'SASS',
            description: 'Hello big world. I;m happy',
            icon: <DiSass {...styleIcons} color={'#c36191'}/>
        },
        {
            id: 1,
            title: 'Material UI',
            description: 'Hello big world. I;m happy',
            icon: <SiMaterialUi {...styleIcons} color={'#0279f2'}/>
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
