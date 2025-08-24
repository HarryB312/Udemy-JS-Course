import { useState } from "react"
function SignUpForm(){
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    function updateFirstname(evt){
        setFirstName(evt.target.value)
    };
    function updateLastname(evt){
        setLastName(evt.target.value)
    };
    return(
        <div>
            <label htmlFor="firstname">First Name</label>
            <input 
                type="text" 
                placeholder="username" 
                value={firstname}
                onChange={updateFirstname}
                id="firstname"/>
            <label htmlFor="lastname">Last Name</label>
            <input 
                type="text" 
                placeholder="username" 
                value={lastname}
                onChange={updateLastname}
                id="lastname"/>
            <button>submit</button>
            
        </div>
        
    )
}

export default SignUpForm