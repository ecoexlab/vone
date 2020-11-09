import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import order from './order';

export default combineReducers({
    order,
    form: formReducer
})