import {combineReducers} from 'redux';
import clinicReducer from './clinicReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    clinic: clinicReducer,
    error: errorReducer,
    auth: authReducer
});

