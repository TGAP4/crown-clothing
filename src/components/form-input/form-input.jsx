import React from 'react';
import * as S from './form-input-styles';

const FormInput = ({handleChange, label, value, ...rest}) => {
  return (
    <S.Group>
      <S.FormInput onChange={handleChange} {...rest} />
      {label ?
        <S.FormInputLabel value={value}>
          {label}
        </S.FormInputLabel>
        : null
      }
    </S.Group>
  );
};

export default FormInput;