import { useState } from 'react'
import './App.css'
import ShowCountries from './components/showCountries'
import FilterCountries from './components/filterCountries'

function App() {
  const [countries, setCountries] = useState([])    

  return (
    <div className="App">      
      <FilterCountries setCountries={setCountries}/>
      <ShowCountries countries={countries} setCountries={setCountries}/>        
    </div>
  )
}

export default App
