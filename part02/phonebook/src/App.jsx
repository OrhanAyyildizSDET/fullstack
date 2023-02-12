import { useState,useEffect } from 'react'
import PersonsFilter from './components/personFilter'
import PersonsForm from './components/personForm'
import PersonShow from './components/personShow'
import personsDb from './services/personsDb'

function App() {
  const [findName, setFindName] = useState("")
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({name:"John Stone",number:"43-23265908"})

  const hook = ()=>{
    personsDb.getAll()
    .then(response=>{
      setPersons(persons.concat(response))
    })
  }

  useEffect(hook,[])


  return (
    <div> 
      <PersonsFilter findName={findName} setFindName={setFindName}/>
      <PersonsForm persons={persons} setPersons={setPersons} newPerson={newPerson}
        setNewPerson={setNewPerson} personsLenght={persons.length}/>
      <PersonShow persons={persons} findName={findName} setPersons={setPersons}/>
    </div>
  )
}

export default App
