const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  else if(message.includes("updated")||message.includes("we let you know")||message.includes("Added"))
    return (
        <div className='error1'>
        {message}
        </div>
    )
  else
  return (
    <div className='error2'>
    {message}
    </div>
    )   
}

export default Notification