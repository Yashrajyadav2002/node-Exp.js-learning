import axios from "axios";
import { useState,useEffect } from "react";

const Home = ()=>{
    const userAuthenicate = async ()=>{
        let api="http:/localhost:8000/student/userth";
        const token = localStorage.getItem("token");

        if (token){
            const responce = await axios.post(api,{},{headers:{"auth-token":token}});
            console.log(responce.data)
        }

        else{
            console.log("no token 1! you have in yur browser")
        }
    }

    useEffect(()=>{
        userAuthenicate();
    },[]);

    return(
        <>
        
        <h1> Welcome to home page </h1>
        </>
    )
}

export default Home;