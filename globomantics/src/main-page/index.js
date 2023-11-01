import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("./houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  },[]);

  //determine featured house on home page
  const featuredHouse = useMemo(()=>{
    if(allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }

  },[allHouses]);
  
  return (
    <div className='constainer'>
      <Header subtitle="Providing houses all over the world !!"
      title="Your number one comfort! "
      />
    </div>  
  );
}

export default App;
