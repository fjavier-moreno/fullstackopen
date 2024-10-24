const Country = ({ country }) => {
	return (
		<div>
			<h2>{country.name.common}</h2>
			<div>Capital {country.capital}</div>
			<div>Area {country.area}</div>
			<h3>Languages</h3>
			<ul>
				{Object.entries(country.languages).map(([code, lang]) => (
					<li key={code}>{lang}</li>
				))}
			</ul>
			<div>
				<img src={country.flags.png} alt={country.flags.alt} />
			</div>
		</div>
	)
}

export default Country