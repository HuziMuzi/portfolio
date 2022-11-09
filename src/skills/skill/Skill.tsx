import React, {useState} from 'react';
import style from './Skill.module.scss'
import {motion} from "framer-motion";

type skillTypeProps = {
    icon: JSX.Element | string
    title: string
    description: string
    // styleColor? : string
    span?: string
    customDelay? : number

}


const skillsVisible = {

    transition  : (custom: number) => (
        {
            delay: custom ? custom : 1 * 0.2,
            // default: {
            //
            //     duration: .3,
            //     ease: [0, 0.71, 0.2, 1.01]
            // },
            scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
            }
    }),

}

// props.styleColor ? `${style.iconBlock} ${props.styleColor}`  :
export const Skill = (props: skillTypeProps) => {

    // const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    // variants={skillsVisible}
                    transition={{
                        delay: (props.customDelay? props.customDelay : 1) * 0.2,
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                    className={style.skillBlock}

        >
            <div className={`${style.iconBlock}`}>
                <div className={style.icon}>{props.icon}</div>

            </div>
            <h3 className={style.title}>{props.title}
                <br/> <span>{props.span} </span>
            </h3>
            {/*<p className={style.description}>{props.description}</p>*/}
        </motion.div>
    );
};

