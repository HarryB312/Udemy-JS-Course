import { useState } from "react"
export default function Counter(){
    const[count, setCount] = useState(0)
    const addOne = ()=>{
        setCount(currentCount => currentCount + 3)
    } 
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}>Increment Count</button>
        </div>
    )
}