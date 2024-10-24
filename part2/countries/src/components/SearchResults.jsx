import Country from './Country'
import CountryList from './CountryList'

const SearchResults = ({ countries, handleCountryView, selectedCountry }) => {

	const elements = countries.length

	if (selectedCountry !== null) {
		return (
			<Country country={selectedCountry} />
		)
	} else if (elements > 10 && elements !== 0) {
		return (
			<p>Too many results, specify another filter</p>
		)
	} else if (elements <= 10 && elements >= 2) {
		return (
			<CountryList countries={countries} handleCountryView={handleCountryView} />
		)
	} else if (elements === 1) {
		return (
			<Country country={countries[0]} />
		)
	} else {
		return null
	}
}

export default SearchResults