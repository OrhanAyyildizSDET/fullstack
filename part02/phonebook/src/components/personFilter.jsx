const PersonsFilter = ({findName,setFindName}) =>{   
    
    const handleFilterChange = (event) =>{
    setFindName(event.target.value)
    }    

    return(
        <div>           
            filter show with: <input placeholder={"Find a name..."} value={findName}
                            onChange={handleFilterChange}/>
        </div>
    )
}

export default PersonsFilter