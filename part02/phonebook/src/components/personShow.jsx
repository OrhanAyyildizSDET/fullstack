import personsDb from "../services/personsDb"

const PersonShow = ({persons,findName,setPersons,setErrorMessage}) => {
      
    const usersShow = persons.filter((user)=>user.name.toLowerCase().includes(findName.toLowerCase())) 

    function deletePerson(index,personName){
        let copyName=personName
        let confirm=window.confirm(`Are you sure about delete ${personName}?`)
        if(confirm)
            personsDb.deletePerson(index).then(response=>{
                setErrorMessage(`${personName} is deleted succesfully!`)
                setPersons(persons.filter((user)=>!user.name.includes(personName))) 
            })
            .catch(error => {
                alert(
                  `the person '${copyName}' was already deleted from server`
                )
                copyName=""
                setPersons(notes.filter(n => n.id !== id))
              })
    }

    return(
        <div>
             {usersShow.map((name,i)=><p key={i}>{name.name} {0+name.number} 
             <button className="deleteButton" onClick={()=>deletePerson(i+1,name.name)}>delete</button></p>)}
        </div>     
    )
}

export default PersonShow