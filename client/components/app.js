import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Radio from '@material-ui/core/Radio'
import './main.scss'

const WeekContainer = () => {
  const API_KEY = '0063b112cbe6139b682874db48760936'
  const [userValue, setUserValue] = useState('')
  const [weatherr, setWeather] = useState({})
  const [city, setCity] = useState('Miami')
  const [changeUnit, setChangeUnit] = useState('metric')
  const [tempChange, setTempChange] = useState('C')

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${changeUnit}&appid=${API_KEY}`
    ).then(({ data }) => setWeather(data))
  }, [city, changeUnit])
  if (weatherr.main === undefined || weatherr.weather === undefined) {
    return <div>Loading . . .</div>
  }
  if (weatherr.code === 200) {
    return <div>City not found</div>
  }
  return (
    <div className=" max-h-full ...">
      <div className="flex items-center ... py-2">
        <input
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              setCity(userValue)
            }
          }}
          type="text"
          id="input-field"
          placeholder="Search:"
          className="text-4xl font-bold placeholder-black text-center text-appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
          value={userValue}
          onChange={(event) => setUserValue(event.target.value)}
        />
        <button
          type="button"
          id="search-button"
          className="flex-shrink-0 py-1 px-2 rounded"
          onClick={() => setCity(userValue)}
        >
          <img src="https://i.ibb.co/bdYY691/search-2.png" alt="logo" />
        </button>
      </div>
      <div className="div-bg">
        <div className="mt-4 ml-4">
          <Radio
            checked={changeUnit === 'metric' || tempChange === 'metric'}
            onChange={() => {
              setTempChange('C')
              setChangeUnit('metric')
            }}
            value="metric"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'metric' }}
          />
          Metric
          <Radio
            checked={changeUnit === 'imperial' || tempChange === 'imperial'}
            onChange={() => {
              setTempChange('F')
              setChangeUnit('imperial')
            }}
            value="imperial"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'imperial' }}
          />
          Imperial
        </div>
        <div className="min-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-4 py-2">
            <div className="font-bold text-center text-4xl mb-2 ">{weatherr.name}</div>
            <div className="flex flex-wrap py-8 mx-8">
              <div className="ml-4 box-border h-20 w-40 p-4 border-4 border-gray-400 bg-gray-200 mb-4 mb-4 rounded-full py-2 px-4 flex items-center justify-center">
                <p className="font-semibold">Temp:</p>
                <p className="font-normal">
                  {weatherr.main.temp} &deg;{tempChange}
                </p>
              </div>
              <div className="ml-4 box-border h-20 w-40 p-4 border-4 border-gray-400 bg-gray-200 mb-4 rounded-full py-2 px-4 flex items-center justify-center">
                <p className="font-semibold">feels:</p>
                <p className="font-normal">
                  {weatherr.main.feels_like} &deg;{tempChange}
                </p>
              </div>
              <div className="ml-4 box-border h-20 w-40 p-4 border-4 border-gray-400 bg-gray-200 mb-4 rounded-full py-2 px-4 flex items-center justify-center">
                <p className="font-semibold">min temp:</p>
                <p className="font-normal">
                  {weatherr.main.temp_min} &deg;{tempChange}
                </p>
              </div>
              <div className="ml-4 box-border h-20 w-40 p-4 border-4 border-gray-400 bg-gray-200  mb-4 rounded-full py-2 px-4 flex items-center justify-center">
                <p className="font-semibold">max temp:</p>
                <p className="font-normal">
                  {weatherr.main.temp_max} &deg;{tempChange}
                </p>
              </div>
              <div className="ml-4 box-border h-20 w-40 p-4 border-4 border-gray-400 bg-gray-200 mb-4 rounded-full py-2 px-4 flex items-center justify-center">
                <p className="font-semibold">pressure: </p>
                <p>{weatherr.main.pressure}hpa</p>
              </div>
              <div className="ml-4 box-border h-20 w-40 p-4 border-4 border-gray-400 bg-gray-200  mb-4 rounded-full py-2 px-4 flex items-center justify-center">
                <p className="font-semibold">humidity:</p>
                <p className="font-normal">{weatherr.main.humidity}%</p>
              </div>
            </div>
            <div className="px-6 py-4">
              {weatherr.weather.map((el) => (
                <div>
                  <img src={`http://openweathermap.org/img/wn/${el.icon}@2x.png`} alt="Logo" />
                  <span className=" mt-2 ml-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {el.main}
                  </span>
                  <span className=" mt-2 ml-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {el.description}
                  </span>
                </div>
              ))}
              <span className="mt-2 ml-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                wind Breeze {weatherr.wind.speed}m/s
              </span>
              <span className="mt-2 ml-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                Coordinate: Latitude: {weatherr.coord.lon} Longitude: {weatherr.coord.lat}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeekContainer
