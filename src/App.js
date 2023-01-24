
import { useState } from 'react';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterFun from './components/CounterFun';
import User from './components/User';
import Employee from './components/Employee'

function App() {

 

const [username,setUsername]=useState("Manu")
const [age,setAge]=useState(25)


  return (
    <div className="App">
    <header className="App-header">
      <CounterFun/>
      <CounterClass/>
      <User data={username} age={age}/>
      <Employee/>
</header>
 </div>
  );
}

export default App;
