import { useState } from 'react'

const Button = ({onClick,text}) => {
  return(
    <button style={{marginRight:10}} onClick={onClick}>{text}</button>
  ) 
}

const ShowVote = ({number}) => {
  return(
    <p>has {number} votes</p>
  )
}

function vote(selected,votePoint,setVotePoint){
    votePoint[selected]+=1
    setVotePoint(votePoint.concat())
}

function nextAnectode(length,setSelected){  
    setSelected(Math.floor(Math.random() * length))    
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const[votePoint,setVotePoint] = useState([1,3,4,2,11,0,8,10]) 

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <ShowVote number={votePoint[selected]}/> 
      <div>
        <Button onClick={()=>vote(selected,votePoint,setVotePoint)} text="vote"/>
        <Button onClick={()=>nextAnectode(anecdotes.length,setSelected)}  text="next anecdote"/>        
      </div>     
      
           
    </div>
  );
}

export default App;
