/* eslint-disable react/prop-types */
const Header = (course) => {
  return (
    <h1>{course.course.name}</h1>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App