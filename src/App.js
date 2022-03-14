import './App.css';
import Nav from './components/Nav'
import React from 'react';
import Veterinaria from './components/Veterinaria'
import Perritos from './db/Perritos'
import Children from './components/Children';
import Keys from './components/Keys';

function App(props) {

  return (
    <div>
     <Keys />
     <Veterinaria perritos={Perritos}>
      
       <Children nombre="Juan"/>
       <Children nombre="Luis"/>
       <Children nombre="Pedro"/>
      
     </Veterinaria>
    </div>
  );
}

export default App;
