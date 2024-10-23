const TotalExercises = ({ parts }) => {
	return (
		<>
			<p>Total of exercises: {parts.reduce((sum, part) => sum + part.exercises, 0)} </p>
		</>
	)
}

export default TotalExercises