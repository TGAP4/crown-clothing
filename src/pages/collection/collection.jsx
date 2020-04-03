import React from 'react';
import './collection.scss';

import {connect} from 'react-redux';
import {selectCollection, selectIsCollectionFetching} from '../../redux/shop/shop-selectors';

import CollectionItem from '../../components/collection-item/collection-item';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';


const Collection = ({collection, isLoading}) => {
  const {title, items} = collection;
  return (  
    isLoading ? 
    <LoadingSpinner />
    : <div className='collection'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => 
          <CollectionItem key={item.id} item={item} />
          )}
        </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  isLoading: selectIsCollectionFetching(state)
});

export default connect(mapStateToProps)(Collection);