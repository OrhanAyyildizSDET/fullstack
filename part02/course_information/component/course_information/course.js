import Content from "./content"

const Course = ({course}) => {
    return(
        <>
            <Content course={course.parts}/>   
        </>
    )
}

export default Course

