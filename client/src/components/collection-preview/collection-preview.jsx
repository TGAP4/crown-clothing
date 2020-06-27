import React from 'react';
import * as S from './collection-preview-styles';

import {withRouter, Link} from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({title, items, match}) => {
  return (
    <S.CollectionPreview>
      <S.Title 
        as={Link} to={`${match.path}/${title.toLowerCase()}`}
      >
        {title.toUpperCase()}
      </S.Title>
      <S.Preview>
        {items.filter((item, i) => i < 4)
        .map(item => 
            <CollectionItem key={item.id} item={item} />
        )}
      </S.Preview>
    </S.CollectionPreview>
  )
}

export default withRouter(CollectionPreview);