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




// passing data using props
function Button(props) {
    // const handleClick =() => setCounter(counter+1);
      return (
      <button onClick={() => console.log("clicked")}>+5</button>
    );
  }
  
  
  // Display counter
  function Display(props){
    return(
    <div>{props.message}</div>  
    );
  }
  
  // function to render App
  function App(){
    const [counter, setCounter] = useState(250);
    return (
     <>
      <Display message={counter}/>
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






// Passing functions inside main App component to the children
function Button(props) {
	return (
    <button onClick={props.updateCount}>+5</button>
  );
}


// Display counter
function Display(props){
  return(
  <div>{props.message}</div>  
  );
}

// function to render App
function App(){
  const [counter, setCounter] = useState(250);
  const updateCounter = () => setCounter(counter+5);
  return (
    <div>
    <Button updateCount={updateCounter}/>
    <Display message={counter}/>
      </div>
    );
}


ReactDOM.render(
 <App/>,
  document.getElementById('mountNode'), 
);

// *** The React 18 way:
// root.render(
//   <Button />,
// );