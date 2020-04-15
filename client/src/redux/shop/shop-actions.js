import Types from './shop-types';

export const fetchCollectionsStart = () => ({
  type: Types.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: Types.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: Types.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});