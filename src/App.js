import './App.css';
import Nav from './components/Nav'
import React from 'react';
import Veterinaria from './components/Veterinaria'
import Perritos from './db/Perritos'
function App() {

  return (
    <div>
     <Nav datos={{nombre:"Mi restaurante"}}/>
     <Veterinaria perritos={Perritos} />
    </div>
  );
}

export default App;
