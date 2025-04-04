import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    if (counter == 20){
      return;
    }else{
      setCounter(counter+1)
    }
    
  }

  const removeValue = () => {
    if (counter <= 0){
      return;
    }else{
      setCounter(counter-1)
    }
  }
  
  const resetValue = ()=>{
    setCounter(15)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button> 
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <br />
      <button onClick={resetValue}>reset to 15</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
