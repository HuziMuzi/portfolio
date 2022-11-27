import React from 'react';
import style from './MyProjects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import {Title} from "../common/components/title/Title";
import todo from "./../assets/image/todolists.png"
import socialMedia from "./../assets/image/sotialMedia.png"
import { Slide} from "react-awesome-reveal";


const MyProjects = () => {

    const socialMediaImg = {
        backgroundImage: `${socialMedia}`
    }
    const todoListsImg = {
        backgroundImage: `${todo}`
    }
    const calculatorImg = {
        backgroundImage: `${todo}`
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
                    <Slide direction={'left'}>

                    <Project
                        description={'Descriptions my project it"s very good.Descriptions my project it"s very good.Descriptions my project it"s very good.Descriptions my project it"s very good'}
                        title={'Todo list'}
                        styles={todoListsImg}
                    />
                </Slide>

                <Slide direction={'right'} delay={800}>
                    <Project
                        description={'Descriptions my project it"s very good.Descriptions my project it"s very good'}
                        title={'Sotial media'}
                        styles={socialMediaImg}
                        positionRight={reversStyle}
                    />
                </Slide>

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