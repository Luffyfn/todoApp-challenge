import {createStore} from 'redux';

import {reducer} from '../Reducers/index'

const initialState = {};

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, initialState, reduxDevTools);

export default store;


