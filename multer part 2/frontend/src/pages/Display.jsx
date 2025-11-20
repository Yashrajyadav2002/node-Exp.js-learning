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
             {
              key.images.map((key1)=>{
                return "<p> <img src="+key1+" width='30' height='40' /> <p>"
              })
             }

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
        <h1>Data display</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
            </tr>
            {ans}
        </table>
        
        </>
    )
}

export default Display;