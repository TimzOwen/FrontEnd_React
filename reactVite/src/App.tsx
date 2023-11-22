import { useState } from "react";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import Message from "./Message";

function App() {

  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    const newDrink = {
      title: drink.title, // or ...drink   --> doest change this values
      price: 10
    }
    setDrink(newDrink);

    // one line object
    // setDrink({...drink, price:14});
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick} >Click Me</button>
    </div>
  );
}
 
export default App; 