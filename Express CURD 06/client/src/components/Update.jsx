import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [myData,setMydata]=useState([]);
  const navigate = useNavigate();
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
  const myDel = async(id)=>{
    navigate(`/myedit/${id}`);
  }
  const myEdit = async (id)=>{
    navigate(`/myedit/${id}`)
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

          <a href="#" onClick={()=>{myEdit(key._id)}}>Edit</a>
          <a href="#" onClick={()=>{myDel(key._id)}}>Delete</a>
        </td>
      </tr>
      
      </>
    )
  });

  return(
    <>
    <h1>Update Student Data</h1>
    <hr />
    <table align='center' width="500" border="1">
      <tr>
        <th>RollNo</th>
        <th>Name</th>
        <th>City</th>
        <th>fees</th>
        <th>Update</th>
      </tr>
      {ans}
    </table>
    
    </>
  )
}


export default Update;