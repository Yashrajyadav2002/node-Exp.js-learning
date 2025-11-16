import { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=async()=>{

    let api="http://localhost:8000/students/registration";
      const response = await axios.post(api, {name, email, password}); 
      console.log(response.data);

    }

  return (
    <>
      <h1> User Registration</h1>
      Enter Username <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <br />
      Enter Email <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <br />
      Enter Password <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <br />
      <button onClick={handleSubmit}>Registration</button>

    </>
  )
}
export default Registration;