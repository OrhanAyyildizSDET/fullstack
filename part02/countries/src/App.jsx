import { useState } from 'react'
import './App.css'
import ShowCountries from './components/showCountries'
import FilterCountries from './components/filterCountries'
import WeatherInfo from './components/weatherInfo'

function App() {
  const [countries, setCountries] = useState([])    
  
  return (
    <div className="App">      
      <FilterCountries setCountries={setCountries}/>
      <ShowCountries countries={countries} setCountries={setCountries}/>      
      <WeatherInfo countries={countries}/>  
    </div>
  )
}

export default App
