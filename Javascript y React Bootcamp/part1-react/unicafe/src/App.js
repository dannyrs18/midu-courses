import { useState } from 'react';
import Button from './Button';
import Stadistics from './Stadistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseStateValue = (value, setValue) => setValue(value + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => increaseStateValue(good, setGood)} text={"good"} />
      <Button handleClick={() => increaseStateValue(neutral, setNeutral)} text={"neutral"} />
      <Button handleClick={() => increaseStateValue(bad, setBad)} text={"bad"} />
      <Stadistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;