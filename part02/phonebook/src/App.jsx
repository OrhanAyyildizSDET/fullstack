import { useState,useEffect} from 'react'
import Persons from './components/persons'
import PersonsFilter from './components/personsFilter'
import PersonsForm from './components/personsForm'
import axios from 'axios'

const App = () => {
  const [findName, setFindName] = useState("")
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({name:"James Miller",number:"12-12314121"})

  const usersShow = persons.filter(user=>
    user.name.toLowerCase().includes(findName.toLowerCase())
  )  

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(persons.concat(response.data))
      })
  }
  
  useEffect(hook,[])

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonsFilter findName={findName} setFindName={setFindName}/>
      <PersonsForm newPerson={newPerson} setNewPerson={setNewPerson} setPersons={setPersons}
        persons={persons}
      />
      <h2>Numbers</h2>
      <Persons usersShow={usersShow}/>
    </div>
  )
}

export default App