import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import directoryReducer from './directorySlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import collectionReducer from "./collectionSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    collections: collectionReducer
});

export default  persistReducer(persistConfig, rootReducer);