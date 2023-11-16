import { useState } from "react";
import ListGroup from "./components/ListGroup";
import './App.css'

function App() {

  const items = ["New York","Los Angles", "United States","Nairobi","Uganda","Germany"];

  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={() => console.log("cliked")} ></ListGroup>
    </div>
  );
}
 
export default App; 