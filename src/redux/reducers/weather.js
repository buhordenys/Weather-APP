import {initialStateCity} from "./city";
import {GET_CITY_WEATHER} from "../actions/weather";
import {CHANGE_CITY} from "../actions/city";

const initialState = {
    city: initialStateCity,
    requestedCityWeather: {},
    loading: false,
}

export default function weatherReducer(state = initialState, action) {
    switch (action.payload) {
        case GET_CITY_WEATHER: {
            return ({
                city: action.payload.city,
                requestedCityWeather: action.payload.requestedCityWeather,
                loading: false,
            })
        }
        case CHANGE_CITY: {
            return ({
                ...state,
                city: action.payload,
            })
        }
        default: {
            return state
        }
    }
}