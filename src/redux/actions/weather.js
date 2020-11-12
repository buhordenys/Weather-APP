export const GET_CITY_WEATHER_REQUEST = 'GET-CITY-WEATHER-REQUEST'
export const GET_CITY_WEATHER = 'GET-CITY-WEATHER'


export const getWeather = (value) => {
    console.log(value) // выводит id
    return dispatch => {
        dispatch({
            type: GET_CITY_WEATHER_REQUEST,
            payload: {
                loading: true,
            }
        });

        fetch(`api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=6bfd4fb0ffeff238bbf467e8730fcfde`)
            .then(
                response => dispatch({
                    type: GET_CITY_WEATHER,
                    payload: {
                        city: value,
                        requestedCityWeather: response.json(),
                        loading: false,
                    }
                })
            )
    };
}