import React from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop-actions';

import CollectionsOverview from '../collections-overview/collections-overview';
import Collection from '../collection/collection';


class ShopPage extends React.Component {
  
  componentDidMount() {
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();
  }

  render() {
    const {match} = this.props;
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
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);