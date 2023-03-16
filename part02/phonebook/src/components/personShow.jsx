import personsDb from "../services/personsDb"

const PersonShow = ({persons,findName,setPersons,setErrorMessage}) => {
      
    const usersShow = persons.filter((user)=>user.name.toLowerCase().includes(findName.toLowerCase())) 

    const deletePerson = (index,personName)=>{
        let confirm=window.confirm(`Are you sure about delete ${personName}?`)
        if(confirm)
            personsDb.deletePerson(index).then(response=>{
                setErrorMessage(`${personName} is deleted succesfully!`)
                setPersons(persons.filter((user)=>!user.name.includes(personName))) 
            })
            .catch(error => {
                alert(
                  `the person '${personName}' was already deleted from server`
                )
              })
    }

    return(
        <div>
             {usersShow.map(name=><p key={name.id}>{name.name} {0+name.number} 
             <button className="deleteButton" onClick={()=>deletePerson(name.id,name.name)}>delete</button></p>)}
        </div>     
    )
}

export default PersonShow