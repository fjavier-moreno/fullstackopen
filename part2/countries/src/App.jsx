import { useState, useEffect } from 'react'
import Search from './components/Search'
import SearchResults from './components/SearchResults'
import Notification from './components/Notification'
import searchService from './services/search'

const App = () => {
  const [countries, setCountries] = useState([])
  const [result, setResult] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    searchService
      .getAll()
      .then(response => {
        setCountries(response)
      })
      .catch(error => {
        setErrorMessage(error.message)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })

  }, [])

  const handleSearch = (event) => {
    const value = event.target.value

    if (value.length === 0){
      setResult([])
    } else {
      const filtered = countries.filter(c => c.name.official.toLowerCase().includes(value))
      setResult(filtered)
    }
  }


  return (
    <div>
      <div>Find countries <Search handler={handleSearch} /> </div>
      <Notification message={errorMessage} />
      <SearchResults countries={result} />
    </div>
  )
}

export default App