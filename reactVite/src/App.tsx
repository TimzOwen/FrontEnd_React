import { useState } from "react";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import Message from "./Message";

function App() {

  // const [firstName, setFirstName] = useState('');
  // const [lastname, setLastName] = useState('');

  /**
   * avoid deeply nested structures
   * group related vairbales using objects
   */

  const [person, setPerson] = useState({
    firstName: '',
    lastName: '' 
  });   

  const [isloading, setLoading ] = useState(false);

  return (
    <div>
      {/* {person.firstName} {person.lastName} */}
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </div>
  );
}
 
export default App; 