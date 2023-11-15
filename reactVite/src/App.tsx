import ListGroup from "./components/ListGroup";
import Message from "./components/ListGroup";

function App() {
  let items = [
    "Kenya",
    "Uganda",
    "Tanzania",
    "Ethopia",
    "Zanzibar",
    "South Africa",
  ];

  return (
    <div>
      <ListGroup items={items} heading="Cities"/> 
    </div>
  );
}

export default App;
