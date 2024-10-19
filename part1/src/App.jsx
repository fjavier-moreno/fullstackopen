const Header = (course) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ parts, exercises }) => {
  return (
    <>
      <p>
        {parts[0]} {exercises[0]}
      </p>
      <p>
        {parts[1]} {exercises[1]}
      </p>
      <p>
        {parts[2]} {exercises[2]}
      </p>
    </>
  )
}

const Total = (exercises) => {
  return (
    <p>Number of exercises {exercises.sum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content 
        parts={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App