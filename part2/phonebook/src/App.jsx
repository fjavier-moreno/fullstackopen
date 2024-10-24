import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import NewContactForm from './components/NewContactForm'
import Contacts from './components/Contacts'
import noteService from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [filter, setFilter] = useState([...persons])
  const [newnumber, setNewNumber] = useState('')

  useEffect(() => {
    noteService
      .getAll()
      .then(personsList => {
        setPersons(personsList)
        setFilter(personsList)
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

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      noteService
        .remove(person.id)
        .then(personDeleted => {
          setPersons(persons.filter((person) => person.id !== personDeleted.id))
          setFilter(persons.filter((person) => person.id !== personDeleted.id))
          alert(`${personDeleted.name} was deleted`)
        })
    }
  }

  const addContact = () => {
    event.preventDefault()

    if (persons.find((p) => p.name === newName) && persons.find((p) => p.number !== newnumber)) {
      if (window.confirm(`${newName} is alrady added to phonebook. Replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === newName)
        const changedContact = { ...person, number: newnumber }

        noteService
          .update(person.id, changedContact)
          .then(returnedContact => {
            setPersons(persons.map(p => p.name !== newName ? p : returnedContact))
            setFilter(persons.map(p => p.name !== newName ? p : returnedContact))
          })
      }
    } else {
      const contactObject = { name: newName, number: newnumber, id: (persons.length + 1).toString() }
      noteService
        .create(contactObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setFilter(persons.concat(returnedPerson))
        })
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
      <Contacts persons={filter} handleDelete={handleDelete} />
    </div>
  )
}

export default App