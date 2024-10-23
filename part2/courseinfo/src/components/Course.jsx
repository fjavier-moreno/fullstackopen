import Content from './Content'
import TotalExercises from './TotalExercises'

const Course = ({ course }) => {
	return (
		<>
			<h1>{course.name}</h1>
			<Content parts={course.parts} />
			<TotalExercises parts={course.parts}/>
		</>
	)
}

export default Course