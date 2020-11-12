import {createSelector} from "reselect";

export const selectStateWeather = (state) => {
    return state.weather
}

export const selectSelectedWeather = createSelector(
    selectStateWeather,
    (stateWeather) => stateWeather?.requestedCityWeather
)

export const selectSelectedLoading = createSelector(
    select
)

export const selectSelectedWeatherTemp = createSelector(
    selectSelectedWeather,
    (stateTemp) => stateTemp?.main
)