import { createStore, combineReducers } from 'redux';
import catalog from './reducers/product';
import cart from './reducers/cart';

const reducers = combineReducers({
    catalog,
    cart,
});

const storeConfig = () => createStore(reducers); 

export default storeConfig;
