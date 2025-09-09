// hooks - special function that allows functional components
//         to use React features (state and lifecycle) without writing class components
//         commonly used as useState and useEffect

// useState() - allows to add state to functional components.
//              can do two things - current state value(variable) and 
//              function(setter function) to update it

import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState();
    const updateName = () => {
        // name = "Aishwarya"
        // updating name will only change local variable and not the internal state value
        setName("Aishwarya")
        console.log(name)
    }

        //setting initial value for age
    const [age, setAge] = useState(0);
    const incrementAge = () => {
        setAge(age + 1)
    }

    const [isEmployed, setIsEmployed] = useState(true)
    const toggleEmployeeState = () => {
        setIsEmployed(!isEmployed)
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployeeState}>Toggle Status</button>
        </div>
    )
}

export default MyComponent