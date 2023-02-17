import axios from "axios"
import { useState,useEffect } from "react"

const WeatherInfo = ({countries}) => {

    const [weather,setWeather] = useState(null)
    const [weatherPNG,setWeatherPNG] = useState("")

    useEffect(()=>{
        function dataWeather(){
            if(countries.length===1){               
                axios.get(import.meta.env.VITE_WEATHER_BASE_URL+countries[0].capital[0]+import.meta.env.VITE_API_KEY)    
                .then(response=>{
                    setWeather({...response.data})                   
                })                
            }
            else
                setWeather(null)
        }    
        
        dataWeather()
    },[countries])

    useEffect(()=>{
        if(weather===null) return;
        if(countries.length===1)
            setWeatherPNG(import.meta.env.VITE_WEATHERICON_BASE_URL+weather.weather[0].icon+
                    import.meta.env.VITE_WEATHERICON_PNG)
        else        
            setWeatherPNG("")
    })

    if(weather&&weatherPNG)
        return(
            <div>
                <h1>Weather in {countries[0].capital[0]}</h1>
                <h3>temperature {(weather.main.temp-273.6).toFixed(2)} Celcius</h3>
                <img src={weatherPNG} alt="weather condition"/>
                <h3>wind {weather.wind.speed} m/s</h3>
            </div>
        )    
    else       
        return <div>Please enter country name for learn the weather</div>
}      

export default WeatherInfo