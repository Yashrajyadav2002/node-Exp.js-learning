import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate}  from "react-router-dom";
const Update = () => {
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();
    const loadData = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/students/updatedata`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(() => {
        loadData();
    }, [])
    const myDel=async(id)=>{
           let api = `${import.meta.env.VITE_BACKEND_URL}/students/updatedelete?id=${id}`;
           const response = await axios.delete(api);
           alert(response.data.msg);
           loadData();
    }
    const myEdit=async(id)=>{
          navigate(`/myedit/${id}`)
    }

    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td> {key.rollno} </td>
                    <td> {key.name} </td>
                    <td> {key.city} </td>
                    <td> {key.fees} </td>
                    <td>
                       <a href="#" onClick={()=>{myEdit(key._id)}}>  Edit </a>   / 
                         <a href="#"  onClick={()=>{myDel(key._id)}}>Delete</a> 
                    </td>
                </tr>
            </>
        )
    });
    return (
        <>
            <h1> Update Student Data</h1>
            <hr />
            <table align="center" width="500" border="1">
                <tr>
                    <th> Rollno </th>
                    <th> Name </th>
                    <th> City </th>
                    <th> Fees </th>
                    <th>Update</th>
                </tr>
                {ans}
            </table>
        </>
    )
}
export default Update;