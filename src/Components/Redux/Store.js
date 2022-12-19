import {legacy_createStore as createStore} from 'redux'
import counterReducer from './Reducer';

console.log('counterReducer',counterReducer);

const store = createStore(counterReducer);

export default store;

