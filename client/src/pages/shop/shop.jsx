import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {fetchCollectionsStart} from '../../redux/shop/shop-actions';
import {selectIsCollectionFetching} from '../../redux/shop/shop-selectors';

import CollectionsOverview from '../collections-overview/collections-overview';
import Collection from '../collection/collection';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';


const ShopPage = ({match, fetchCollectionsStart, isLoading}) => {
  const [preLoading, setPreLoading] = useState(true);
  useEffect(() => {
    fetchCollectionsStart();
    setPreLoading(false);
  }, [fetchCollectionsStart]);

  return (
    <>
      {preLoading || isLoading ?
        <LoadingSpinner />
        : <div>
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
      }
    </>
  )
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);