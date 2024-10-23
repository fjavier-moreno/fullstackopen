import { useState } from 'react'

import Filter from './components/Filter'
import NewContactForm from './components/NewContactForm'
import Contacts from './components/Contacts'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [filter, setFilter] = useState([...persons])
  const [newnumber, setNewNumber] = useState('')

  const handleContactSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase()

    if (searchTerm.length > 0) {
      setFilter(persons.filter((person) => person.name.toLowerCase().includes(searchTerm)))
    } else {
      setFilter(persons)
    }
  }

  const handleContactChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addContact = () => {
    event.preventDefault()

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is alrady added to phonebook`)
    } else {
      const contactObject = { name: newName, number: newnumber, id: newName }
      setPersons(persons.concat(contactObject))
      setFilter(persons.concat(contactObject))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handler={handleContactSearch} />
      <h2>Add a new</h2>
      <NewContactForm
        onSubmit={addContact}
        handleContact={handleContactChange}
        handleNumber={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Contacts persons={filter} />
    </div>
  )
}

export default App