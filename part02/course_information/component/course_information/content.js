import Part from "./part"
const Content = ({course})=>{
    return(
        <div>
            <div>
                {course.map(part=>
                    <Part key={part.id} course={part.name} number={part.exercises}/>
                )}
            </div>
            <h3>total of {course.reduce((prev, curr) => prev + curr.exercises, 0)} exercises</h3>
        </div>
    )
}

export default Content