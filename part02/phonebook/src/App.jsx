import { useState,useEffect } from 'react'
import PersonsFilter from './components/personFilter'
import PersonsForm from './components/personForm'
import PersonShow from './components/personShow'
import personsDb from './services/personsDb'
import Notification from './components/notification'

function App() {
  const [findName, setFindName] = useState("")
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({name:"John Stone",number:"43-23265908"})
  const [errorMessage, setErrorMessage] = useState('we let you know when changes happened')

  useEffect(() => {
    if(!persons.length)
      personsDb
        .getAll()
        .then(response => {
          setPersons(response)
        })
  }, [])

  return (
    <div> 
      <Notification message={errorMessage} setmessage={setErrorMessage}/>
      <PersonsFilter findName={findName} setFindName={setFindName}/>
      <h1>add new or update</h1>
      <PersonsForm persons={persons} setPersons={setPersons} newPerson={newPerson}
        setNewPerson={setNewPerson} setErrorMessage={setErrorMessage}/>
      <PersonShow persons={persons} findName={findName} setPersons={setPersons}
       setErrorMessage={setErrorMessage}/>
    </div>
  )
}

export default App
