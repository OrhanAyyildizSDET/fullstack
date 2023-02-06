import { useState } from 'react'
import Persons from './components/persons'
import PersonsFilter from './components/personsFilter'
import PersonsForm from './components/personsForm'

const users = [{ name: 'Arto Hellas', number: '040-123456'},
{ name: 'Ada Lovelace', number: '39-44-5323523'},
{ name: 'Dan Abramov', number: '12-43-234345'},
{ name: 'Mary Poppendieck', number: '39-23-6423122'}]

const App = () => {
  const [findName, setFindName] = useState("")
  const [persons, setPersons] = useState(users)
  const [newPerson, setNewPerson] = useState({name:"James Miller",number:"12-12314121"})

  const usersShow = persons.filter(user=>
    user.name.toLowerCase().includes(findName.toLowerCase())
  )  

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