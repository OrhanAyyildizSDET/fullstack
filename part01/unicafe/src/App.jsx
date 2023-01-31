import { useState } from 'react'
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Title = () => {
    return(
      <h2>give feedback</h2>
    )    
  }

  const Statistic = () => {
    return(
      <h2>statistic</h2>
    )    
  } 

  const Button = (props) => {
    return(
      <button style={{marginRight:20}} onClick={props.onClick}>
        {props.text}
      </button>
    )
  }

  const increaseButton = (event) =>{
    if(event === "good")
      setGood(good+1)   
    else if(event === "neutral")
      setNeutral(neutral+1)
    else
      setBad(bad+1)
  }

  return (
    <div>
      <Title/>      
      <div>
        <Button onClick = {()=>increaseButton("good")} text = "good"></Button>
        <Button onClick = {()=>increaseButton("neutral")} text = "neutral"></Button>
        <Button onClick = {()=>increaseButton("bad")} text = "bad"></Button>
      </div>   
      <Statistic/>
      <div>
        <p style={{marginRight:20}}>Good:{good}</p>
        <p style={{marginRight:20}}>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>All:{good+bad+neutral}</p>
        <p>Average:{(good+bad*-1)/(good+bad+neutral)}</p>
        <p>Positive:{(good/(good+bad+neutral))*100} %</p>        
      </div>         
    </div>
  );
}

export default App;
