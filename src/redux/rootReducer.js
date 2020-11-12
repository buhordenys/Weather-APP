import {combineReducers} from "redux";
import cityReducer from './reducers/city';
import weatherReducer from './reducers/weather';

export default combineReducers( {
    cities: cityReducer,
    weather: weatherReducer,
})
