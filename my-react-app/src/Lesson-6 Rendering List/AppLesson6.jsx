import List from "./List"
import ListFunctions from "./ListFunctions"

function App() {

  const fruits = [{name: "apple", calories: 95}, 
                    {name: "orange", calories: 100}, 
                    {name: "banana", calories: 90}, 
                    {name: "pineapple", calories: 80}, 
                    {name: "cherry", calories: 110}]
  
  const vegetables = [{name: "potatoes", calories: 110}, 
                    {name: "calery", calories: 15}, 
                    {name: "carrots", calories: 25}, 
                    {name: "corn", calories: 63}, 
                    {name: "brocoli", calories: 50}]
  return(
    <>
    {fruits.length>0 ? <ListFunctions items={fruits} category="Fruits"/>: null}
    {vegetables.length>0 ? <ListFunctions items={vegetables} category="Vegetables"/>: null}
    </>
  )
}

export default App
