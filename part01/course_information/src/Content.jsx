const Content = ({parts}) => { 
    return (
      <div>      
        <p>{parts.parts[0].name} {parts.parts[0].exercises}</p>
        <p>{parts.parts[1].name} {parts.parts[1].exercises}</p>
        <p>{parts.parts[2].name} {parts.parts[2].exercises}</p>
      </div>
    )
  }
  
  export default Content