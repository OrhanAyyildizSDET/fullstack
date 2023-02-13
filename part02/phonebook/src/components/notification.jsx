const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  else if(message.includes("deleted"))
    return (
        <div className='error2'>
        {message}
        </div>
    )
  else
  return (
    <div className='error1'>
    {message}
    </div>
    )   
}

export default Notification