import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const MyEdit=()=>{
    const {id}  =useparams();
    const [mydata,setmydata] = useState({});
    const loadData  = async()=>{
       let api = `http://localhost:3001/student/editdisplay/${id}`;
       const responce = await axios.get(api);
       console.log(responce.data);
       setmydata(responce.data);  
    }

    useEffect(()=>{
        loadData();
    },[]);

    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setmydata(values=>({...values,[name]:value}));
        console.log(mydata);
    }


    const handleSubmit = async()=>{
        let api = "http://localhost:3001/student/editdatasave";
        const responce = await axios.post(api,mydata);
        alert(responce.data.msg);
    }

    return(
        <>
        <h1>Edit Data</h1>
        Edit Rollno : <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput} />
        <br />
        Edit Name : <input type="text" name="name" value={mydata.name} onChange={handleInput} />
        <br />
        Edit city : <input type="text" name="city" value={mydata.city} onChange={handleInput} />
        <br />
        Edit Fees : <input type="text" name="fees" value={mydata.fees} onChange={handleInput} />
        <br />
        <button onClick={handleSubmit}>Update</button>
        </>
    )
}
export default MyEdit;

