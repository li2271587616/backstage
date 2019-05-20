import {combineReducers} from 'redux';
import  commenReducer from '../commen/store/reducer';

export default combineReducers ({
commen:commenReducer,
}) 