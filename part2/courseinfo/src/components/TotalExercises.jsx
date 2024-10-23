const TotalExercises = ({ parts }) => {

	let total = parts.reduce((sum, part) => sum + part.exercises, 0)

	return (
		<>
			<p>Total of exercises: {total} </p>
		</>
	)
}

export default TotalExercises