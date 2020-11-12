import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {selectSelectedCity} from "../redux/selectors/city";
import {getWeather} from "../redux/actions/weather"
import {changeCity} from "../redux/actions/city";


export default function City() {
    const selectCity = useSelector((state) => selectSelectedCity(state))
    const dispatch = useDispatch()

    const changeStateCity = useCallback( (value) => dispatch(changeCity(value)), [dispatch])
    const getInfoCityTemp = useCallback((e) => dispatch(getWeather(e)), [dispatch])


    const send = (event) => {
        const enteredCity = event.target.value
        return changeStateCity(enteredCity)
    }

    const sendSelectCity = (e) => {
        const sendCity = e.target.value
        console.log(sendCity, selectCity)
        if(sendCity) {
            return getInfoCityTemp(selectCity)
        }
        return `Something went wrong...`
    }

    console.log()
    return (
        <div>
            <label>Enter town:</label>
            <input
                type='text'
                id={uuidv4()}
                placeholder={selectCity}
                onChange={send}
            >
            </input>
            <input
                type='button'
                value='send'
                onClick={sendSelectCity}
            />
        </div>
    )
}