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

  const handleSelectItem = (item: string) =>{
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/> 
    </div>
  );
}

export default App;
