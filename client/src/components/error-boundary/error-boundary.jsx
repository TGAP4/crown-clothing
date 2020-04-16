import React from 'react';
import * as S from './error-boundary-styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }
  
  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <S.ErrorImageOverlay>
          <S.ErrorImage imageUrl='https://i.imgur.com/Oqnene0.png' />
          <S.ErrorText>I'm garbage that kills for money</S.ErrorText>
        </S.ErrorImageOverlay>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;