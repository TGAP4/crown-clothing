import React from 'react';
import './custom-button.scss';

const CustomButton = ({children, isGoogleSignedIn, ...rest}) => {
    return(
        <div className={`${isGoogleSignedIn ? 'google-signed-in' : ''} custom-button`} 
             {...rest}
        >
            {children}
        </div>
    )
}

export default CustomButton;