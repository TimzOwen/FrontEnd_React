// Challenge: Start the button with 5
// Double the button's label on each click

function Button() {
	const [counter, setCounter] = useState(5);
	return <button onClick={() => setCounter(counter*2)}>{counter}</button>;
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);

// *** The React 18 way:
// root.render(
//   <Button />,
// );




// Render using function

function Button() {
	const [counter, setCounter] = useState(0);
  const handleClick =() => setCounter(counter+1);
	return (
    <button onClick={handleClick}>{counter}</button>
  );
}


// Display counter
function Display(){
  return(
  <div>...</div>  
  );
}

// function to render App
function App(){
  return (
   <>
    <Display/>
    <Button />
    </>);
}


ReactDOM.render(
 <App/>,
  document.getElementById('mountNode'),
);

// *** The React 18 way:
// root.render(
//   <Button />,
// );


