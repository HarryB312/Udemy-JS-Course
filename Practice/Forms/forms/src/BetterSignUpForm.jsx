import { useState } from "react"

function BetterSignUpForm(){
    const [formData, setFromData] = useState({firstName: '', lastName: ''})
    const handleChange = (evt) =>{
        const changeField = evt.target.name;
        const newValue = evt.target.value;
    }
    
        return(
        <div>
            <label htmlFor="firstname">First Name</label>
            <input 
                type="text" 
                placeholder="First Name" 
                value={formData.firstname}
                onChange={handleChange}
                name="firstname"
                id="firstname"/>
            <label htmlFor="lastname">Last Name</label>
            <input 
                type="text" 
                placeholder="Last Name" 
                value={formData.lastName}
                onChange={handleChange}
                name="lastname"
                id="lastname"/>
            <button>submit</button>
            
        </div>
        
    )
}

export default BetterSignUpForm