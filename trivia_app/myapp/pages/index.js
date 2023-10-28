import { useState } from "react";

export default function Home() {

  function ListItems({ints, addValue}){
    const ints = [1,2,3,4];
    return(
      <>
      <button onClick={addValue}>Add Item</button>
     {
      ints.map(id => {
        return(
          <li key={id}>{id}</li>
        )
      })
     }
      </>
    )
  }

  const [ints, setInts] = useState([1,2,3,4]);
  
  function addValue(){
    const newVal = Math.max(...ints) + 1;
    setInts([...ints, newVal])
  }

  return (
    <ul>
      <ListItems ints={ints} addValue={addValue}/>
    </ul>
  )  
}
