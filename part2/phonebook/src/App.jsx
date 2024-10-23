import { useState } from 'react'

import Contacts from './components/Contacts'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const handleContactChange = (event) => {
    setNewName(event.target.value)
  }

  const addContact = () => {
    event.preventDefault()
console.debug('newname', newName)
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is alrady added to phonebook`)
    } else {
      const contactObject = { name: newName, }
      setPersons(persons.concat(contactObject))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input onChange={handleContactChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts persons={persons} />
    </div>
  )
}

export default App