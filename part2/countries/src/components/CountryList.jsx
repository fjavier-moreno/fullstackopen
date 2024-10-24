const CountryList = ({ countries, handleCountryView }) => {
	return (
		<div>
			<ul>
				{
					countries.map((c) => (
						<li key={c.area}>
							{c.name.common}
							<button onClick={() => handleCountryView(c)}>
								Show
							</button>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default CountryList