import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();

  // ✅ Load all student records
  const loadData = async () => {
    try {
      const api = "http://localhost:8000/student/update-display"; // ✅ Correct route
      const response = await axios.get(api);
      console.log("Loaded data:", response.data);
      setMyData(response.data);
    } catch (error) {
      console.error("Error loading data:", error);
      alert("Failed to load data. Please check backend connection.");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ✅ Delete a student record
  const myDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      const api = `http://localhost:8000/student/update-delete?id=${id}`; // ✅ Correct route
      const response = await axios.delete(api);
      alert(response.data.msg || "Record deleted successfully");
      loadData(); // refresh table
    } catch (error) {
      console.error("Error deleting record:", error);
      alert("Failed to delete record. Check console for details.");
    }
  };

  // ✅ Navigate to Edit Page
  const myEdit = (id) => {
    navigate(`/myedit/${id}`);
  };

  const ans = myData.map((key) => (
    <tr key={key._id}>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.fees}</td>
      <td>
        <button onClick={() => myEdit(key._id)}>Edit</button>
        &nbsp;|&nbsp;
        <button onClick={() => myDelete(key._id)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <>
      <h1 align="center">Update Student Data</h1>
      <hr />
      <table align="center" width="700" border="1" bgcolor="lightgray">
        <thead bgcolor="skyblue">
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};

export default Update;
