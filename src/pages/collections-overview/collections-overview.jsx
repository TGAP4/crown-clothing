import React from 'react';
import './collections-overview.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview, selectIsCollectionFetching} from '../../redux/shop/shop-selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';


const CollectionsOverview = ({collections, isLoading}) => {
  return (
    isLoading ?
    <LoadingSpinner />
    : <div className='collections-overview'>
      {collections.map(({id, ...rest}) =>
        <CollectionPreview key={id} {...rest} />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  isLoading: selectIsCollectionFetching
});

export default connect(mapStateToProps)(CollectionsOverview);