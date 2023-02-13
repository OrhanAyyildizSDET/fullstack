const ShowCountries=({countries})=>{    
    if(countries.length>9)
        return(
            <div>
                <p>please type one more letter, there are too much matched countries</p>
            </div>
        )
    else if(countries.length<10)
    return(
        <div>            
            {countries.map((country,i)=>(<p style={{color:"red"}} key={i}>country name : 
            <strong>
            {country.name.common}
            </strong></p>))}            
        </div>
    )

    else
        <div>
            <CountryDetail/>
        </div>

}


export default ShowCountries