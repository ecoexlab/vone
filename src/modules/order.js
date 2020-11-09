import { createAction, handleActions} from 'redux-actions';
import { Map, List} from 'immutable';


// Action Types
const SET_ORDER_FORM = 'order/SET_ORDER_FORM';
const UPDATE_ORDER_FORM='order/UPDATE_ORDER_FORM';


// Action Creator
export const setOrderForm = createAction(SET_ORDER_FORM);
export const updateOrderForm = createAction(UPDATE_ORDER_FORM);

// Set Initial State
const initialState = Map({
    orderInfo : {}
})



export default handleActions ({
    [SET_ORDER_FORM]: (state, action) => {
        return state.set('orderInfo', action.payload);
    },
    [UPDATE_ORDER_FORM]: (state, action) => {
        
    }
}, initialState)