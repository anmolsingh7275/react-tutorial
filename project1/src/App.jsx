import { useState } from 'react'

import './App.css'

function App() {
 // let Counter =15;

let  [counter,setCounter] = useState(15)// hook counter is  variable  amd setCounter is method

  const addValue = () => {
    
    //counter = counter +1; 
    setCounter(counter +1)
    console.log("Clicked",  counter);
  }
  const removeValue = () =>{
    setCounter(counter-1)
  }
  
  
  return (
    <>
     <div>
      <h3>Anmol First Project</h3>
      <h2> Counter Value { counter}</h2>
      <button onClick ={addValue}> 
        Add Value {counter}
      </button>
      <br />
      <button onClick={removeValue}>
        remove Value {counter}
      </button>
      <p> footer :</p>
     </div>
    </>
  )
}

export default App
