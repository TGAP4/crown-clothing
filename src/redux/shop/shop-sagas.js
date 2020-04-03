import {takeLatest, call, all, put} from 'redux-saga/effects';
import Types from './shop-types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase-utils';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop-actions';


function* fetchCollectionsAsync() {
  try{
    const collectionRef = yield call([firestore, firestore.collection], 'collections');
    const snapshot = yield call([collectionRef, collectionRef.get]);
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
};

function* fetchCollectionsStart() {
  yield takeLatest(Types.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
};

export default function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ]);
};