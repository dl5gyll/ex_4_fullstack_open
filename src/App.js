import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  return(
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>All {props.all}</p>
      <p>average {props.average}</p>
      <p>postive {props.postive}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1 )
    
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1 )
  }
  
  const handleAverage = () => {
    
      let ave = setAverage((good + neutral + bad) / all)
      average.push(ave)
  } 

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1 )
  }
  
  


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={handleAverage}/>

    </div>
  )
}

export default App