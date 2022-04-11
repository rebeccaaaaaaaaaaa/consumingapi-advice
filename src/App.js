import {useEffect, useState} from 'react';
import Card from './components/Card';
import NeonDetail from './components/NeonDetail';

import { MdAutorenew } from "react-icons/md";
import './App.css';

import Api from './api';

function App() {

  const [advice, setAdvice] = useState('');
  const [idAdvice, setIdAdvice] = useState(0);

  useEffect(() => {
    Api.getAdvice()
      .then(data => {
        setAdvice(data.slip.advice);
        setIdAdvice(data.slip.id);
      })
      .catch(error => console.log(error));
  }, []);

  // refresh page on click
  const handleClick = () => {
    window.location.reload();
    console.log('refreshed');
  };

  return (
    <div className="App">
      <Card idAdvice={idAdvice} adviceText={advice}/>
      <NeonDetail  />
      <span className="span-reload"> <MdAutorenew onClick={handleClick} /> </span>
    </div>
  );
}

export default App;
