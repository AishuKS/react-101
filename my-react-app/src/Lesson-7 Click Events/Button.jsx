//click events - an interation when a user clicks on a specific element.
//               we can respond to clicks by passing a callback to the onClick event handler

function Button(){

    let count = 0
    const handleClick1 = () => console.log("OUCH")
    const handleClick2 = (names) => console.log(`${names} stop clicking me`)
    const handleClick3 = (name) => {
        if(count < 3){
            count = count + 1;
            console.log(`${name}, you clicked me ${count} times`)
        }
        else{
            console.log(`${name} stop clicking me`)
        }
    }

    return(
        <button onClick={() => handleClick3("Aishu")}>Click Me</button>
    )
}

export default Button