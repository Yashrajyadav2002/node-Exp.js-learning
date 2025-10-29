import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [rno, setRno] = useState("");
  const [myData, setMyData] = useState(null);

  const handleSubmit = async () => {
    try {
      if (!rno.trim()) {
        alert("Please enter a roll number!");
        return;
      }

      const api = "http://localhost:8000/student/search"; // ✅ fixed port
      const response = await axios.post(api, { rno: rno });
      console.log(response.data);

      if (response.data && Object.keys(response.data).length > 0) {
        setMyData(response.data);
      } else {
        setMyData(null);
        alert("No record found!");
      }
    } catch (error) {
      console.error("Error while searching:", error);
      alert("Search failed. Check console for details.");
    }
  };

  return (
    <>
      <h1 align="center">Search Student Data</h1>
      <div align="center">
        Enter Roll No:&nbsp;
        <input
          type="text"
          name="rno"
          value={rno}
          onChange={(e) => setRno(e.target.value)}
        />
        &nbsp;
        <button onClick={handleSubmit}>Search</button>
      </div>
      <hr />

      {myData ? (
        <table border="1" width="600" align="center" bgcolor="lightgray">
          <thead bgcolor="lightgreen">
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>City</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{myData.rollno}</td>
              <td>{myData.name}</td>
              <td>{myData.city}</td>
              <td>{myData.fees}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p align="center">No data to display</p>
      )}
    </>
  );
};

export default Search;
