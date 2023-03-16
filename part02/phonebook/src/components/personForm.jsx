import personsDb from '../services/personsDb'

const PersonsForm = ({newPerson,setNewPerson,setPersons,persons
                      ,setErrorMessage}) =>{
    const addList = (event)=>{
        event.preventDefault()
        let a = persons.findIndex(x=>x.name===newPerson.name)
        let b = persons.findIndex(x=>x.number===newPerson.number)        
       
        if(a!=-1){
            if(b!=-1)                
                setErrorMessage(`${newPerson.name} and ${newPerson.number} is already added to phonebook`)
            else{
                let confirm=window.confirm(`Do you want to update ${newPerson.name}'s number with ${newPerson.number}`)
                if(confirm){
                    const putData={"name":newPerson.name,
                    "number":newPerson.number}

                    personsDb.update(persons[a].id,putData)
                    .catch(error=>{
                        setErrorMessage(error.response.data.error)
                    })
                    setPersons(persons.map(put=>put.id===persons[a].id?putData:put))
                    setErrorMessage(`${newPerson.name}'s phone number updated as ${newPerson.number}` )                    
                }
            }
        }

        else{
            const newPersonObject = {
                name:newPerson.name,
                number:newPerson.number,
            }   

            personsDb.create(newPersonObject)
            .then(response=>{
                setPersons(persons.concat(response))
                setNewPerson(newPerson=>({...newPerson,name:"",number:""}))
                setErrorMessage(`Added ${newPerson.name} with ${newPerson.number} phone number`)
            }).catch(error=>{
                console.log(error.response.data)
                setErrorMessage(error.response.data.error)                
            })            
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
                <button className='addButton' type="submit">add or update</button>
            </form>
        </div>
    )
}

export default PersonsForm