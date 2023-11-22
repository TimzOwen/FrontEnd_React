import { useState } from "react";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import Message from "./Message";

function App() {
  const [tags, setTags] = useState(["Happy","Sad","Moody"]);

  const handleClick = () => {
    //Add
    setTags([...tags, "Jumpy"]);
    // Remove
    setTags(tags.filter(tag =>tag !=='happy'));
    //update  
    setTags(tags.map(tag => tag ==='happy' ? 'hapiness' : tag));
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
