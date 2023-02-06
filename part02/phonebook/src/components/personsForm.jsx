const PersonsForm = ({newPerson,setNewPerson,setPersons,persons}) =>{

    const addList = (event)=>{
        event.preventDefault()
        let a = persons.findIndex(x=>x.name===newPerson.name)
        if(a!=-1){
            alert(`${newPerson.name} is already added to phonebook`)
        }
        else if(newPerson.name==="")
            alert("You can not add empty name field!!!!!!")

        else{
            let newNameObject = {
            name:newPerson.name,
            number:newPerson.number
            }

            setPersons(persons.concat(newNameObject))
            setNewPerson(newName=>({...newName,name:"",number:""}))
        }
    }

    const handleChangePerson = (event,key) => {
        setNewPerson(newName=>({...newName,[key]:event.target.value}))
    }  

    return(
        <div>
            <form onSubmit={addList}>
            <div>
            name: <input value={newPerson.name} onChange={(e)=>handleChangePerson(e,"name")}/>
            </div>
            <div>
            number:<input value={newPerson.number} onChange={(e)=>handleChangePerson(e,"number")}/>
            </div>
            <button type="submit">add</button>
            </form>
            <h2>Numbers</h2>
        </div>
    )
}

export default PersonsForm