import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'

const Update = () => {
  const [myData,setMydata]=useState([]);
  const loadData = async()=>{
     let api = "http://localhost:3001/student/updatedata";
     const responce = await axios.get(api);
     console.log(responce.data);
     setMydata(responce.data);
    
  }
  useEffect(()=>{
    loadData();
  },[])

  const mydel = async(id)=>{
     let api = `http://localhost:3001/student/updatedelete?id=${id}`;
     const responce = await axios.delete(api);
     alert(responce.data.msg);
     loadData();
  }

  const ans = myData.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
        <td>

          Edit  /
          <a href="#" onClick={()=>{mydel(key._id)}}>Delete</a>
        </td>
      </tr>
      
      </>
    )
  })
}


export default Update