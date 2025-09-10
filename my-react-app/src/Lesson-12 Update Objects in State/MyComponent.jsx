// Spread operator - ...car is called the spread operator. When we update a value in the object
//                   we must keep the existing property. so we are using spread operator

import React, {useState} from 'react'

function MyComponent(){

    const [car, setCar] = useState({
                        year: 2024,
                        make: "Ford",
                        model: "Mustang"
    })

    function handleYearChange(event){
        setCar(car => ({...car, year:event.target.value}))
    }

    function handleMakeChange(event){
        setCar(car => ({...car, make:event.target.value}))
    }

    function handleModelChange(event){
        setCar(car => ({...car, model:event.target.value}))
    }

    return(
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
        </div>
    )
}

export default MyComponent