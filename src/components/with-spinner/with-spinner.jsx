import React from 'react';
import * as S from './with-spinner-styles';

const WithSpinner = WrappedComponent => {
  const Spinner = ({isLoading, ...rest}) => {
    return (
      isLoading ? 
      <S.SpinnerOverlay>
        <S.Spinner />
      </S.SpinnerOverlay>
      : <WrappedComponent {...rest} />
    );
  };
  return Spinner;
};


export default WithSpinner;