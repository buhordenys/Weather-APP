import React from 'react';
import {useSelector} from "react-redux";
import {selectSelectedLoading, selectSelectedWeatherTemp} from "../redux/selectors/weather";


export default function Weather() {

    const selectedCityTemp = useSelector((state) => selectSelectedWeatherTemp(state))
    const selectLoading = useSelector((state) =>selectSelectedLoading(state))

    return ({
            selectLoading ?
                <div>Loading...</div>
                :
                <div>
                    Температура:
                    <output name='result_temp'>
                        {selectedCityTemp}
                    </output>
                    Диапазон температури:
                    от <output name='result_temp_min'>
                    {selectedCityTemp}
                </output>
                    до <output name='result_temp_max'>
                    {selectedCityTemp}
                </output>
                </div>
        })

}