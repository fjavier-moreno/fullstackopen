/* eslint-disable react/prop-types */
const Header = (course) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {
        parts.map((part, index) => (
          <Part key={index} part={part.name} exercise={part.exercises} />
        ))
      }
    </>
  )
}

const Total = ({ parts }) => {
  let total = 0;
  
  parts.map((part) => (
    total += part.exercises
  ))

  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content parts={[part1, part2, part3]} />
      <Total parts={[part1, part2, part3]} />
    </div>
  )
}

export default App