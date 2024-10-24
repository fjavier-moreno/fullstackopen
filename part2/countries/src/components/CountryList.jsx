const CountryList = ({ countries }) => {
	return (
		<div>
			<ul>
				{
					countries.map((c) => (
						<li key={c.area}>{c.name.official}</li>
					))
				}
			</ul>
		</div>
	)
}

export default CountryList