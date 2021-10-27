import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const store = createStore(rootReducer, applyMiddleware(logger));

const persistor = persistStore(store);

export {store, persistor};