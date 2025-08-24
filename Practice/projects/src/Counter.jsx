import { useState } from "react";

function Counter(){
  const [count, setCount] = useState(0)
  const addOne = ()=>{
    setCount(c => c + 1)
  };
  const subOne = ()=>{
    setCount(c => c - 1)
  };
  const reset = ()=>{
    setCount(0)
  }
  return(
    <div>
    <p>Counter: {count} </p>
      <button onClick={addOne}>Add +1</button>
      <button onClick={subOne}>Subtract -1</button>
      <button onClick={reset}>Reset to 0</button>
    </div>
    )
}

export default Counter;