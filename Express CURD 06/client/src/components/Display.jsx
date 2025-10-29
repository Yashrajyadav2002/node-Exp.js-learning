import { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [mydata, setmydata] = useState([]);

  const loadData = async () => {
    try {
      const api = "http://localhost:8000/student/display";
      const response = await axios.get(api);
      console.log(response.data);
      setmydata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key, index) => (
    <tr key={index}>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.fees}</td>
    </tr>
  ));

  return (
    <>
      <h1 align="center">Display Student Records</h1>
      <hr />
      <table border="1" width="600" align="center" bgcolor="lightgray">
        <thead bgcolor="skyblue">
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};

export default Display;
