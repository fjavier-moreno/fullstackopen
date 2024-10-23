import Content from './Content'
import TotalExercises from './TotalExercises'

const Courses = ({ courses }) => {
	
	return (
		<>
		<h1>Web development curriculum</h1>
			{courses.map(course => (
				<div key={course.id}>
					<h2>{course.name}</h2>
					<Content parts={course.parts} />
					<TotalExercises parts={course.parts} /> 
				</div>
			))}
		</>
	)
}

export default Courses