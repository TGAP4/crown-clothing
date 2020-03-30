import React from 'react';
import './custom-button.scss';

const CustomButton = ({children, type, ...rest}) => {
    return(
        <div className={`${type} custom-button`} {...rest}>
            {children}
        </div>
    )
}

export default CustomButton;