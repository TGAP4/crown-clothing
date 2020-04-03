import React from 'react';
import * as S from './loading-spinner-styles';


const LoadingSpinner = () => {
  return (
    <S.SpinnerOverlay>
      <S.Spinner />
    </S.SpinnerOverlay>
  );
};

export default LoadingSpinner;