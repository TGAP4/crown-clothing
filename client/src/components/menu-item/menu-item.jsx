import React from 'react';
import * as S from './menu-item-styles';

import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
  return (
    <S.MenuItem 
      size={size} 
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <S.BackgroundImage imageUrl={imageUrl} />
      <S.Content>
        <S.Title>{title.toUpperCase()}</S.Title>
        <S.Subtitle>SHOP NOW</S.Subtitle>
      </S.Content>
    </S.MenuItem>
  )
}

export default withRouter(MenuItem);