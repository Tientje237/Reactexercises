import { useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(0)

  function counter(){
    setNumber(number + 1);
  }
  

  return (
    <>
      <h1>{number}</h1>
      <button onClick={counter}>click me</button>
    </>
  );
}

export default App;
