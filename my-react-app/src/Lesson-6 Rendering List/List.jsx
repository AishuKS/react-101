//map - default way to loop through arrays and return JSX for each element
function List(){

    //plain list
    const fruits = ["apple", "orange", "banana", "pineapple", "cherry"]
    fruits.sort();
    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    // return(
    //     <ol>{listItems}</ol>
    // )

    //array objects
    const fruitsCalories = [{name: "apple", calories: 95}, 
                    {name: "orange", calories: 100}, 
                    {name: "banana", calories: 90}, 
                    {name: "pineapple", calories: 80}, 
                    {name: "cherry", calories: 110}]
    
    // fruitsCalories.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical Sort

    // fruitsCalories.sort((a,b) => b.name.localeCompare(a.name)); // Reverse Alphabetical Sort

    fruitsCalories.sort((a,b) => b.calories - a.calories) // Numeric Sort

    fruitsCalories.sort((a,b) => b.calories - a.calories) // Reverse Numberic

    const listfruits = fruitsCalories.map(fruit => <li key={fruit.name}>{fruit.name}: &nbsp;<b>{fruit.calories}</b></li>)

    const lowCalFruits = fruitsCalories.filter(fruits => fruits.calories < 100)

    const lowCal = lowCalFruits.map(fruit => <li>{fruit.name}: {fruit.calories}</li>)
    
    return(
        <ol>{lowCal}</ol>
    )
}

export default List