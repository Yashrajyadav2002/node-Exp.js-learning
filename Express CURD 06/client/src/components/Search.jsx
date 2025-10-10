import { useState } from "react";
import axios from "axios";

const Search = ()=>{
    const [rno,setrno] = useState("");
    const [mydata,setmydata] = useState([]);
    const handleSubmit = async ()=>{
        let api = "http://localhost:3001/student/search";
        const responce = await axios.post(api,{rno:rno});
        console.log(responce.data);
        setmydata(responce.data);
    }

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
        
        <h1> Search Data</h1>
        Enter Roll.No <input type="text" name="rno"  value={rno}
        onChange={(e)=>{setrno(e.target.value)}}/>
        <button onClick={handleSubmit}>Search</button>
        <hr />
        <hr />
        <hr />

        <table border="1" width="800" align="center" >
            <tr bgcolor="lightgreen">
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
        </table>
         </>
    )
}

export default Search;