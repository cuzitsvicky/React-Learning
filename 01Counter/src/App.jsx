import './App.css'
import { useState } from 'react';

function App() {

  let[counter,setCounter]=useState(5);
  


  function addValue(){
    setCounter(counter+1);
  }

  function RemoveValue(){
    if(counter>0){
    setCounter(counter-1);
    }
  }
     
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value :{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={RemoveValue}>Remove Value</button>
    </>
  )
}

export default App
