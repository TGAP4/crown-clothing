import React from 'react';
import * as S from './menu-item-styles';

import {withRouter, Link} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl, match}) => {
  return (
    <S.MenuItem 
      as={Link}
      size={size} 
      to={`${match.url}${linkUrl}`}
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