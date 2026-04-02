import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(){
  const fruit =  (name)=>{
    alert(`hello ${name}!button was clicked.`);
  };
  return(
      <>
      <h1>example of click event</h1>
      <button onClick={()=>fruit("Alice") }>
        alice
      </button>
      </>
    );
  }

export default App;