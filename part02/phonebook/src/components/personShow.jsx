import personsDb from "../services/personsDb"

const PersonShow = ({persons,findName,setPersons}) => {
      
    const usersShow = persons.filter((user)=>user.name.toLowerCase().includes(findName.toLowerCase())) 

    function deletePerson(index,personName){
        window.confirm(`Are you sure about delete ${personName}?`)
        personsDb.deletePerson(index).then(response=>{
            alert(`${personName} is deleted succesfully!`)
            const personID = persons.findIndex(x=>x.id == index)
            setPersons(persons.filter((user)=>!user.name.includes(personName))) 
        })
    }

    return(
        <div>
             {usersShow.map((name,i)=><p key={i}>{name.name} {0+name.number} 
             <button onClick={()=>deletePerson(i+1,name.name)} style={{backgroundColor:'red',
              background:'red',borderRadius:"10px",marginLeft:"20px"}}>delete</button></p>)}
        </div>     
    )
}

export default PersonShow