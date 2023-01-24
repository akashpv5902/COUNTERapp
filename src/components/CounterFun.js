import React from 'react'

import { useState } from 'react'

export default function CounterFun() {



     // create a state
  const [ counter,setCounter]=useState(0)


  function incrementCounter(){
    setCounter(counter+1)
  }
  function decrementCounter(){
    if(counter>0){
    setCounter(counter-1)
    }
  
  }
  function reset(){
    setCounter(0)
  }
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:'2px solid grey',
        margin:'20px',
        padding:'200px',
        backgroundColor:'yellow'
  
      }} className="App">
      
        <h3>You can Count on me</h3>
     
        {/* <h3>Counter App</h3> */}
        <h1 className='text-center'>{counter}</h1>
        <button className='b1' style={{
          padding:'10px',
          border:'2px solid white',
          margin:'4px',
          borderRadius:'10px'
        }} onClick={incrementCounter}><i class="fa-solid fa-plus"></i>        Add</button>
        <button className='b1'  style={{
          padding:'10px',
          border:'2px solid white',
          margin:'4px',
          borderRadius:'10px'
        }} onClick={decrementCounter}><i class="fa-solid fa-minus"></i>          Subtract</button>
        <button className='b1' style={{
          padding:'10px',
          border:'2px solid white',
          margin:'4px',
          borderRadius:'10px'
        }} onClick={reset}><i class="fa-solid fa-eraser"></i>    Reset</button>
        
    
    </div>
  )
}
