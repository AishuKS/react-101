function EventHandler(){

    // this is the event handler
    const handleClick = (e) => console.log(e);

    // accessing the properties of event handler
    // when we click on the button, the button changes from "Click Me" to "OUCH"
    const handlerProperties = (e) => e.target.textContent = "OUCH";

    return(
        <button onClick={(e) => handlerProperties(e)}>Click Me</button>

        //Double Click
        // <button onDoubleClick={(e) => handlerProperties(e)}>Click Me</button>
    )
}

export default EventHandler