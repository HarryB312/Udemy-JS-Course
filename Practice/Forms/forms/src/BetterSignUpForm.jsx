import { useState } from "react"

  function BetterSignUpForm(){
      const [formData, setFromData] = useState({firstName: '', lastName: '', password: ''});
      const handleChange = (evt) =>{
        const changeField = evt.target.name;
        const newValue = evt.target.value;
        setFromData(currData => {
          currData[changeField] = newValue
          return {...currData}
        })
      };
      const handleSubmit = ()=>{
        console.log(formData)
      }
    return(
      <div>
        <label htmlFor="firstname"></label>
        <input
          type="text" 
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
          id="firstname"
          />
        <label htmlFor="lastname"></label>
        <input 
          type="text" 
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
          id="lastname"
          />
          <label htmlFor="password"></label>
          <input 
          type="password" 
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          id="password"
          />
        <button onClick={handleSubmit}>Submit</button>
      </div>
  )
}

  export default BetterSignUpForm