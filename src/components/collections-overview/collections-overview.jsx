import React from 'react';
import './collections-overview.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors';

import CollectionPreview from '../collection-preview/collection-preview';


const CollectionsOverview = ({collections}) => {
  return (
    <div className='collections-overview'>
      {collections.map(({id, ...rest}) =>
        <CollectionPreview key={id} {...rest} />
      )}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);