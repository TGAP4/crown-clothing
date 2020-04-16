import React, {useState, useEffect, lazy, Suspense} from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {fetchCollectionsStart} from '../../redux/shop/shop-actions';
import {selectIsCollectionFetching} from '../../redux/shop/shop-selectors';

import LoadingSpinner from '../../components/loading-spinner/loading-spinner';

const CollectionsOverview = lazy(() => import('../collections-overview/collections-overview'));
const Collection = lazy(() => import('../collection/collection'));


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
        : <Suspense fallback={<LoadingSpinner />}>
          <Route 
            exact 
            path={`${match.path}`} 
            component={CollectionsOverview}
          />
          <Route 
            path={`${match.path}/:collectionId`}
            component={Collection}
          />
        </Suspense>
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