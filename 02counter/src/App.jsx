import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  

  //  counter =5;

  const addValue=() =>{
    // counter= counter+1;
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+2)    
    // setCounter(counter+1)    
    setCounter(prevCounter => prevCounter+5) 
    setCounter(prevCounter => prevCounter+1)
   
    
  }

  const removeValue=()=>{
    counter= counter-1;
    if(counter<0){
      counter=0;
    }
    setCounter(counter)
  }

  // document.querySelector('h2')

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value : {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br />
     
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
