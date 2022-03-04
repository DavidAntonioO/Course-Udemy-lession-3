import React from 'react';
import {ButtonProps} from './interface';
import './style.css';

<<<<<<< Updated upstream
 export const Button: React.FC<ButtonProps> = ({type= 'default', children}) => {
    const className = type === 'primary' ? 'primary' : '';
    return(
        <button className={className}>{children}</button>
    )
=======
export const Button: React .FC<ButtonProps> = ({ children, onClick, type}) => {
    const buttonType = type || 'default';

    return (
        <button className={'btn btn-${buttonType}'} onClick={onClick}>{children}</button>
    );

>>>>>>> Stashed changes
}