import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = ()=>{
    const [email,setEmail] = useState("");
    const [ password,setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async()=>{

    const api = "http://localhost:8000/students/login";
    const responce = await axios.post(api,{email,password});
    console.log(responce.data);

    }
}