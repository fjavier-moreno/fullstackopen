const TotalExercises = ({ parts }) => {

	let total = parts.reduce((sum,part)=> {
		return sum + part.exercises
	}, 0)

	return (
		<>
			<p>Total of exercises: {total} </p>
		</>
	)
}

export default TotalExercises