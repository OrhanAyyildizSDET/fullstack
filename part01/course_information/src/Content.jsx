const Part = ({part,number}) => {
  return(
    <div>
      <p>{part} {number} </p>
    </div>
  )
}

const Content = (props) => {  
    return (
      <div>        
        <Part part = {props.part1} number = {props.exercises1}/>
        <Part part = {props.part2} number = {props.exercises2}/>
        <Part part = {props.part3} number = {props.exercises3}/>
      </div>
    )
  }
  
  export default Content