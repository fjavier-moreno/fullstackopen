import { useState } from 'react'

const Button = ({ onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    const goodCount = good
    setGood(goodCount + 1)
  }

  const handleClickNeutral = () => {
    const neutralCount = neutral
    setNeutral(neutralCount + 1)
  }

  const handleClickBad = () => {
    const badCount = bad
    setBad(badCount + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text='good' onClick={handleClickGood} />
      <Button text='neutral' onClick={handleClickNeutral} />
      <Button text='bad' onClick={handleClickBad} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App