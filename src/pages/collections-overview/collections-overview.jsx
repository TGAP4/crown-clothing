import React from 'react';
import * as S from './collections-overview-styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview';


const CollectionsOverview = ({collections}) => {
  return (
    <S.CollectionsOverview>
      {collections.map(({id, ...rest}) =>
        <CollectionPreview key={id} {...rest} />
      )}
    </S.CollectionsOverview>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);