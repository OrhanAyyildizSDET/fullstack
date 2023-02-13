const CountryDetail=({countryDeep})=>{
    console.log(countryDeep)
    return(
        <div> 
            <h1>{countryDeep[0].name.common}</h1>
            <p>capital {countryDeep[0].capital[0]}</p>
            <p>area {countryDeep[0].area}</p>
            <h2>languages:</h2>
            {Object.keys(countryDeep[0].languages).map((keyName, i) => (
            <li key={i}>
                {countryDeep[0].languages[keyName]}
            </li>
             ))}
            <p/>            
            <img src={countryDeep[0].flags.png} alt="new"/>
        </div>
    )
}

export default CountryDetail