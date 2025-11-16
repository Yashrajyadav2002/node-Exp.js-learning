import { use, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = ()=>{
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const navigate = useNavigate();

    const handleSubmit=async()=>{
        let api = "http://localhost:8000/students/login";
        const responce = await axios.post(api,{email,password});
        console.log(responce.data);
        localStorage.setItem("token",responce.data.token);
        navigate("/home");
    }

    return(

        <>
        <h1>User Login</h1>
        Enter Email <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <br />
        Enter Password <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <br />
        <button onClick={handleSubmit}> Registraction</button>
        </>
    )

}
export default Login;