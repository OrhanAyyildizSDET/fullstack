import axios from "axios"
import CountryDetail from "./countryDetail"

const ShowCountries=({countries,setCountries})=>{   
    if(countries.length) 
        if(countries.length>9)
            return(
                <div>
                    <p>please type one more letter, there are too much matched countries</p>
                </div>
            )
        else if(countries.length<10&&countries.length>1){
            function show(x){
                axios.get(`https://restcountries.com/v3.1/name/${x}?fullText=true`)
                .then(response=>{
                    setCountries(response.data)
                })
            }
            return(
                <div>            
                    {countries.map((country,i)=>(
                    <p className="countryName" key={i}>country name : 
                        <strong style={{color:"gold"}}>
                        {country.name.common}
                        </strong> 
                        <button className="showButton" onClick={()=>show(country.name.common)}>show</button>
                    </p>))}            
                </div>
            )
        }

        else{   
            return(
                <div>
                    <CountryDetail countryDeep={countries}/>
                </div>
            )                      
        }
}


export default ShowCountries