const Contacts = ({ persons }) => {
	return (
		<div>
			{
				persons.map((person) => <div key={person.name}>{person.name}</div>)
			}
		</div>
	)
}

export default Contacts