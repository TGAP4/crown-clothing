import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import persistedReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);