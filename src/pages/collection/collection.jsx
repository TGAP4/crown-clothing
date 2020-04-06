import React from 'react';
import * as S from './collection-styles';

import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop-selectors';

import CollectionItem from '../../components/collection-item/collection-item';


const Collection = ({collection}) => {
  const {title, items} = collection;
  return (  
    <S.Collection>
        <S.Title>{title}</S.Title>
        <S.Items>
          {items.map(item => 
          <CollectionItem key={item.id} item={item} />
          )}
        </S.Items>
    </S.Collection>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);