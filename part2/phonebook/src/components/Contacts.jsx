const Contacts = ({ persons, handleDelete }) => {
	return (
		<div>
			{
				persons.map((person) => 
				<div key={person.id}>
					{person.name} {person.number}
					<button onClick={() => handleDelete(person)}>Delete</button>
					</div>)
			}
		</div>
	)
}

export default Contacts