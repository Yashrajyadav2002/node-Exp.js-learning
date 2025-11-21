import { useState,useEffect } from "react";
import axios from "axios";

const Display = ()=>{
    const [mydata,setMydata]=useState([]);

    const loadData = async()=>{
        let api = "http://localhost:8000/students/display";
        const responce = await axios.get(api);
        console.log(responce.data);
        setMydata(responce.data);
    }

    useEffect(()=>{
        loadData();
    },[]);


    const ans = mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>
                    <img src={key.defaultImage} style={{width:"100px", height:"80px"}}/>
             <br />

             <td>
          { key.images.map((img) => (
           <img
              src={img} 
                    width="100"
                    height="80"
               style={{ marginRight: "5px", borderRadius: "5px" }}
                  />
          ))}
        </td>
            
                </td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.subject}</td>
            </tr>
            
            
            </>
        )
    });

    return(
        <>
        <h1 align="center">Data display</h1>
        <table border="1" cellPadding="10" align="center"> 
            <thead>
            <tr>
                <th>Images</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
            </tr>
            </thead>
            <thead>{ans}</thead>
        </table>
        
        </>
    )
}

export default Display;