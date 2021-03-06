import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  shopCollections => Object.keys(shopCollections)
    .map(key => shopCollections[key])
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectShopCollections],
  shopCollections => shopCollections[collectionUrlParam] || {items: []}
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);