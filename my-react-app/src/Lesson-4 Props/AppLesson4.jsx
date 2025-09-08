// props = called as properties. They are inputs to a component like function parameter. They
// let you pass data from a parent component to a child component. They are read only,
// a component can use them but cant change the values. 

//propTypes = a mechanism that ensures that the passed value is of the correct datatype
//            age: PropTypes: number
// this is mostly for debugging purpose

import PropTypes from "prop-types"
import Student from "./Student"

function App() {
  return(
    <>
    <Student name = "SpongeBob" age = {10} isStudent={true}/>
    <Student name = "Patrick" age = {42} isStudent={false}/>
    <Student name = "Squidward" age = {50} isStudent={false}/>
    <Student name = "Sandy" age = {27} isStudent={true}/>
    </>
  )
}

export default App
