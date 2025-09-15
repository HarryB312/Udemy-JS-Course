import { useState } from 'react';
import Slider from '@mui/material/Slider'

function Counter (){
  const [count, setCount] = useState(50);
  const handleChange = (e)=>{
    setCount(e.target.value)
  }
  return(
    <div>
      <h1>Count {count}</h1>
      <Slider aria-label="Volume" value={count} onChange={handleChange} />
    </div>
  )
}

export default Counter;