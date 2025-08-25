import { useState } from "react"

function BetterSignUpForm(){
    return(
      <div>
        <input className="firstname"
           type="text" 
           placeholder="First Name"
            />
        <input className="lastname"
            type="text" 
            placeholder="Last Name"
            />
            <button>Submit</button>
        </div>
    )
}

export default BetterSignUpForm