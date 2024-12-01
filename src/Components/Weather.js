import React, { useState } from 'react'
import axios from 'axios'

function Weather() {
    const api_key = process.env.REACT_APP_API
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)
    const handleChangeCity = (e) => {
        setCity(e.target.value)
    }
    const fetchData = async () => {
        // https://openweathermap.org/current#name
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
            console.log(response.data)
            setWeather(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleClick = () => {
        fetchData()
    }
    return (
        <>
            <div className='w-1/3 bg-cyan-400/40 p-4 container mx-auto m-2 rounded-md'>
                <input className="p-2 w-full" type='text' placeholder='Enter City Name' value={city} onChange={handleChangeCity} />
                <button onClick={handleClick} className=' rounded-full p-1 px-4 mt-2 bg-cyan-600 mx-auto block text-white' >Get Weather</button>
                {weather && <>
                    <div className='text-center text-xl m-2'>{weather.name}</div>
                    <div className='text-center'>Tempreture is {weather.main.temp}</div>
                    <p className='text-center'>Description: {weather.weather[0].description}</p>
                    <p className='text-center'>Wind Speed: {weather.wind.speed}</p>
                </>}
            </div>
        </>
    )
}

export default Weather