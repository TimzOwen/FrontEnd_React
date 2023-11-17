import { useState } from "react";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  return (
    <div>
      {firstName} {lastname}
    </div>
  );
}
 
export default App; 