import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import NewContactForm from './components/NewContactForm'
import Contacts from './components/Contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [filter, setFilter] = useState([...persons])
  const [newnumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setFilter(response.data)
      })
  }, [])

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