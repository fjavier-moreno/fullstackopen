import Country from './Country'
import CountryList from './CountryList'

const SearchResults = ({ countries }) => {

	const elements = countries.length

	if (elements > 10 && elements !== 0) {
		return (
			<p>Too many results, specify another filter</p>
		)
	} else if (elements <= 10 && elements >= 2) {
		return (
			<CountryList countries={countries} />
		)
	} else if (elements === 1) {
		const country = countries[0]
		return (
			<Country country={country} />
		)
	} else {
		return null
	}
}

export default SearchResults