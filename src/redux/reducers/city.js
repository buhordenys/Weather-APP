import {CHANGE_CITY} from "../actions/city";

export const initialStateCity = 'Ottawa'

const initialState = {
    selectedCity: initialStateCity,
    cities: [],
}

export default function cityReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CITY: {
            return ({
                ...state,
                selectedCity: action.payload,
            })
        }
        default: {
            return state
        }
    }

}