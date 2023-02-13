import axios from "axios"
import { useState,useEffect } from 'react'

const FilterCountries=({setCountries})=>{

    const [findCountry,setFindCountry] = useState("")

    const ShowSelectedCountry=(event)=>{
        setFindCountry(event.target.value)
    } 

    useEffect(()=>{
        if(findCountry!=="")
            axios.get(`https://restcountries.com/v3.1/name/${findCountry}`).then(
                response=>{                    
                // console.log(response.data)
                    setCountries(response.data)                                    
                }           
            )
    },[findCountry])

    return(
        <div>
            <p>find countries <input type="text" placeholder={"Find a country..."} 
            value={findCountry} onChange={ShowSelectedCountry}/>
            </p>
        </div>
    )
}

export default FilterCountries