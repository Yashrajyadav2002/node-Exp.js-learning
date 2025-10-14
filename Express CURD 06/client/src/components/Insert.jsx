import React, { useState } from 'react'
import axios from 'axios';
const Insert = () => {
    const [val,setval]=useState({});

    const handleInput = (e)=>{
       let name = e.target.name;
       let val1 = e.target.value;
       setval(values=>({...values,[name] : val1}))
    }

    const subData = async(e)=>{
      e.preventDefault();
      let api = "http://localhost:8000/student/save";
      let responce = await axios.post(api,val);
      console.log(responce.data);
      alert("data is saved...")
    }
  return (
    <div>
      <h1>Insert Student Data</h1>
      <form onSubmit={subData}>
        Enter Roll No:<input type="text" name="rollno" onChange={handleInput}/>
        <br/>
        Enter Name:<input type="text" name="name" onChange={handleInput}/>
        <br/>
        Enter City:<input type="text" name="city" onChange={handleInput}/>
        <br/>
        Enter Fees:<input type="text" name="fees" onChange={handleInput}/>
        <br/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Insert