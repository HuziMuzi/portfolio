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
import {DiJavascript1} from "@react-icons/all-files/di/DiJavascript1";



import JavaScriptIcon from "../assets/skillIcon/JavaScriptIcon";
import ReactIcon from "../assets/skillIcon/ReactIcon";
import ReduxIcon from "../assets/skillIcon/ReduxIcon";
import SassIcon from "../assets/skillIcon/SassIcon";
import StyledComponentsIcon from "../assets/skillIcon/StyledComponentsIcon";
import TypeScriptIcon from "../assets/skillIcon/TypeScriptIcon";
import FormikIcon from "../assets/skillIcon/FormikIcon";
import APIIcon from "../assets/skillIcon/APIIcon";
import AxiosIcon from "../assets/skillIcon/AxiosIcon";
import HtmlIcon from "../assets/skillIcon/HtmlIcon";
import CssIcon from "../assets/skillIcon/CssIcon";
import GitIcon from "../assets/skillIcon/GitIcon";


export const Skills = () => {

    const styleIcons = {
        size: '50px',


    }

    const skills = [
        {
            id: 1,
            title: 'React',
            description: 'Hello big world. I;m happy',
            icon: <ReactIcon />,
        },
        {
            id: 2,
            title: 'Redux',
            description: 'Hello big world. I;m happy',
            icon: <ReduxIcon/>,
        },
        {
            id: 3,
            title: 'TypeScript',
            description: 'Hello big world. I;m happy',
            icon: <TypeScriptIcon/>,
        },
        {
            id: 4,
            title: 'JavaScript',
            description: 'Hello big world. I;m happy',
            icon: <JavaScriptIcon/>,
        },
        {
            id: 5,
            title: 'HTML5',
            description: 'Hello big world. I;m happy',
            icon: <HtmlIcon/>
        },
        {
            id: 6,
            title: 'CSS3',
            description: 'Hello big world. I;m happy',
            icon: <CssIcon/>
        },
        {
            id: 7,
            title: 'Git',
            description: 'Hello big world. I;m happy',
            icon: <GitIcon/>
        },
        {
            id: 8,
            title: 'SASS',
            description: 'Hello big world. I;m happy',
            icon: <SassIcon/>
        },
        // {
        //     id: 9,
        //     title: 'Material UI',
        //     description: 'Hello big world. I;m happy',
        //     icon: <SiMaterialUi {...styleIcons} color={'#0279f2'}/>,
        //
        // },
        {
            id: 10,
            title: `Styled`,
            span : 'Component',
            description: 'Hello big world. I;m happy',
            icon: <StyledComponentsIcon/>,

        },

        {
            id: 11,
            title: 'Formik',
            description: 'Hello big world. I;m happy',
            icon: <FormikIcon/>,

        },

        {
            id: 12,
            title: 'REST-API',
            description: 'Hello big world. I;m happy',
            icon: <APIIcon/>,

        },

        {
            id: 13,
            title: 'Axios',
            description: 'Hello big world. I;m happy',
            icon: <AxiosIcon/>,

        },


    ]


    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={`My`} spanText={'Skill'}/>
                <div className={style.skills}>
                    {skills.map(skill => <Skill
                        title={skill.title}
                        description={skill.description}
                        icon={skill.icon}
                        span={skill.span}
                        customDelay={skill.id}
                    />)}
                </div>
            </div>
        </div>
    );
};
