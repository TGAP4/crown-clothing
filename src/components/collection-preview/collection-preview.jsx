import React from 'react';
import * as S from './collection-preview-styles';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({title, items}) => {
  return (
    <S.CollectionPreview>
      <S.Title>{title.toUpperCase()}</S.Title>
      <S.Preview>
        {items.filter((item, i) => i < 4)
        .map(item => 
            <CollectionItem key={item.id} item={item} />
        )}
      </S.Preview>
    </S.CollectionPreview>
  )
}

export default CollectionPreview;