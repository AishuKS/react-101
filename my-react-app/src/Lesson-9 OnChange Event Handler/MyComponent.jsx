//onChange = event handler used primary in form like input, textarea and selects,
//           whose values changes when user interacts

import React, {useState} from 'react'
function MyComponent(){
    const [name, setName] = useState("Enter Name");

    function handleNameChange(event){
        setName(event.target.value)
    }

    const [quantity, setQuantity] = useState()

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    const [comment, setComment] = useState("")

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    const [payment, setPayment] = useState("")

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    const [shipping, setShipping] = useState()

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value = {name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"></input>
            <p>Quantity={quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} 
                      placeholder='Enter delivery instructions'></textarea>
                      <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa Card</option>
                <option value="Mastercard">Mastercard</option>
                <option value="GiftCard">Gift Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label><input type='radio' value="Pickup"
                          checked={shipping=="Pickup"}
                          onChange={handleShippingChange}/>Pickup</label>
            <label><input type='radio' value="Delivery"
                          checked={shipping=="Delivery"}
                          onChange={handleShippingChange}/>Pickup</label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent