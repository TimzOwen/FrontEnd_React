import Button from "./components/Button/Button";
import Like from "./components/Like/Like";

function App() {

  return (
    <div>
      <Like onClick={() => console.log("clicked")}> my button</Like>
    </div>
  );
}
 
export default App; 