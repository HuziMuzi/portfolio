import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from './Button.module.css'



// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {

}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${style.btn} ${className}`




    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >{restProps.children}</button>
    )
}

export default SuperButton;