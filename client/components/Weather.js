import React, { useState } from 'react'
import {connect} from 'react-redux'
import CurrentWeather from './CurrentWeather'
import CitySearch from './CitySearch'
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api'
import Forecast from './Forecast'

/**
 * COMPONENT
 */
const Weather = () => {
    const[ currentWeather, setCurrentWeather ] = useState(null);
    const[ forecast, setForecast ] = useState(null);

    const handleOnSearchChange = searchData => {
        const [lat, lon] = searchData.value.split(' ');

        const currentWeatherFetch = fetch(`${ WEATHER_API_URL }/weather?lat=${ lat }&lon=${ lon }&appid=${ WEATHER_API_KEY }&units=imperial`);
        const forecastFetch = fetch(`${ WEATHER_API_URL }/forecast?lat=${ lat }&lon=${ lon }&appid=${ WEATHER_API_KEY }&units=imperial`);

        Promise.all([ currentWeatherFetch, forecastFetch ])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
                setForecast({ city: searchData.label, ...forecastResponse });
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className='container'>
            <h2>Weather</h2>
            <div style={{ width: '75%', margin: '0 auto' }}>
                <CitySearch onSearchChange={ handleOnSearchChange }/>
            </div>
            <div style={{ width: '80%', margin: '0 auto' }}>
                { currentWeather && <CurrentWeather data={ currentWeather } />}
                { forecast && <Forecast data={ forecast }/> }
            </div>
        </div>
    )
}


export default connect()(Weather)
