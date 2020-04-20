import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { reducer as ToastrReducer } from 'react-redux-toastr'

import tables from './tables/tablesRedux';

const rootReducer = combineReducers({
    tables,
    toastr: ToastrReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;