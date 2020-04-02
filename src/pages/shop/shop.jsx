import React from 'react';
import {Route} from 'react-router-dom';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase-utils';

import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop-actions';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import Collection from '../collection/collection';
import WithSpinner from '../../components/with-spinner/with-spinner';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      updateCollections(convertCollectionsSnapshotToMap(snapshot));
      this.setState({loading: false});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const {match} = this.props;
    const {loading} = this.state;
    return (
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          render={props => 
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          }
        />
        <Route 
          path={`${match.path}/:collectionId`}
          render={props => 
            <CollectionWithSpinner isLoading={loading} {...props} />
          }
        />
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);