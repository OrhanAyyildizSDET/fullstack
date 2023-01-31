import { useState } from 'react'
const StatisticLine = ({text,value}) =>{
  return(
    <p>{text}:{value}</p>
  )
}

const Statistic = ({good,neutral,bad}) => {
  let total=good+bad+neutral
  let average=(good+bad*-1)/total
  let positive=good/total*100+" %"
  if((good+neutral+bad)>0)
    return(   
      <div>        
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={total}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive}/>              
      </div>      
    )
  else
    return(  
      <p>No feedback given</p>    
    )
} 

const Button = (props) => {
  return(
    <button style={{marginRight:20}} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Title = () => {
    return(
      <h2>give feedback</h2>
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
        <Button onClick = {()=>increaseButton("good")} text = "good"/>
        <Button onClick = {()=>increaseButton("neutral")} text = "neutral"/>
        <Button onClick = {()=>increaseButton("bad")} text = "bad"/>
      </div> 
      <h2>statistic</h2>  
      <Statistic good={good} neutral={neutral} bad={bad}/>         
    </div>
  );
}

export default App;
