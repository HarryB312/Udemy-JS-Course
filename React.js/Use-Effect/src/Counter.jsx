import { useState, useEffect } from "react";


function Counter(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(function myEffect(){
        console.log('My effect was called')
    }, [])
    const increment = ()=>{
    setCount(c => c + 1)
};
const handleChange = (e) =>{
    setName(e.target.value);
};

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+1</button>
            <p>Name: {name}</p>
            <input type="text" 
                onChange={handleChange}
                value={name} 
                />
        </div>
        
    )
}

export default Counter;