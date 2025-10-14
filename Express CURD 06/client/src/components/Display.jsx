import { useState,useEffect } from "react";
import axios from "axios";
const Display = ()=>{
  const [mydata,setmydata] = useState([]);
  const loadData = async ()=>{
    let api = `${import.meta.env.VITE_BACKEND_URL}/student/display`;
    const responce = await axios.get(api);
    console.log(responce.data);
    setmydata(responce.data);
  }

  useEffect(()=>{
  loadData();
},[]);

const ans = mydata.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.fees}</td>
    </tr>
    
    </>
  )
})

return(
  <>
  <h1>Display Record</h1>
  <hr />

  <table border="1" width="600" align="center" bgcolor="lightgray">
    <tr bgcolor="skyblue">
      <th>Rollno</th>
      <th>name</th>
      <th>city</th>
      <th>fees</th>
    </tr>
    {ans}
  </table>
  
  </>
)
}
export default Display