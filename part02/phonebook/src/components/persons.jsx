const Persons = ({usersShow}) => {
    
    return(
        <div>
            {usersShow.map((name,i)=><p key={i}>{name.name} {0+name.number}</p>)}
        </div>     
    )
}

export default Persons