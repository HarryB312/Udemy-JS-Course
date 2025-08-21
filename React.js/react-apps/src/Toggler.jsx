import { useState } from "react"
export default function Toggler(){
    const [isHappy, setIsHappy] = useState(true);
    const handleToggle = ()=> setIsHappy(!isHappy);
    return(
      <div>
        <p onClick={handleToggle}>
          {isHappy ? 'Happy' : 'Sad'}
        </p>
      </div>
    )
}