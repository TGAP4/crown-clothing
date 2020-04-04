import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop-actions';

import CollectionsOverview from '../collections-overview/collections-overview';
import Collection from '../collection/collection';


const ShopPage = ({match, fetchCollectionsStart}) => {
  useEffect(() => {fetchCollectionsStart()}, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route 
        exact 
        path={`${match.path}`} 
        component={CollectionsOverview}
      />
      <Route 
        path={`${match.path}/:collectionId`}
        component={Collection}
      />
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);