import React from 'react';
import * as S from './custom-button-styles';

const CustomButton = ({children, mod, ...rest}) => {
    return(
        <S.CustomButton mod={mod} {...rest}>
            {children}
        </S.CustomButton>
    )
}

export default CustomButton;