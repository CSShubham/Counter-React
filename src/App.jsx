import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0);
  // let counter=0;
  const addvalue=()=>{
    // counter++;
    setCounter(counter+1);
    setCounter(counter+1);        //these aren't updating further because they are all going in batches
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter((counter)=>counter+1);
    // console.log("clicked"+counter);
  }
  const subvalue=()=>{
    // counter--;
    if (counter>0){
    setCounter(counter-1);
    }else{
      console.log("can't go negative");
    }
    // console.log("clicked"+counter);
  }

  return (
    <>
    <h1>Counter</h1>
    <h2>counter Value : {counter}</h2>
    <button onClick={addvalue}>add value</button>
    <br />
    <br />
    <button onClick={subvalue}>subtract value</button>
    </>
  )
}

export default App
