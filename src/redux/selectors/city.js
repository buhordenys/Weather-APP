import {createSelector} from "reselect";

export const selectStateCities = (state) => {
    console.log(state)
    return state.cities
}

export const selectSelectedCity = createSelector(
    selectStateCities,
    (stateCities) => stateCities?.selectedCity
)

export const selectSelectedCityFromList = createSelector(
    selectStateCities,
    selectSelectedCity,
    (stateCities, selectCity) => {
        return stateCities.cities.find( (city) => {
            return city.name === selectCity
        })
    }
)