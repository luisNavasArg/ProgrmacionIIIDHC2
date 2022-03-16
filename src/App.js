import './App.css';
import Nav from './components/Nav'
import React from 'react';
import Veterinaria from './components/Veterinaria'
import Perritos from './db/Perritos'
import Children from './components/Children';
import Keys from './components/Keys';
import Peliculas from './components/clase8/db/Peliculas'
import Principal from './components/clase8/ComponenteClase/Principal';
function App() {
console.log(Peliculas)
  return (
    
    
  <Principal color="red" datos={{datos:Peliculas}}>

  </Principal>
    
  );
}

export default App;
