import React from 'react';
import * as S from './custom-button-styles';

const CustomButton = ({children, type, ...rest}) => {
    return(
        <S.CustomButton type={type} {...rest}>
            {children}
        </S.CustomButton>
    )
}

export default CustomButton;