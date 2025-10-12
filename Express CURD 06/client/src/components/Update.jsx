import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    const api = "http://localhost:3001/student/updatedata";
    const response = await axios.get(api);
    console.log(response.data);
    setMyData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const myDelete = async (id) => {
    const api = `http://localhost:3001/student/updatedelete?id=${id}`;
    const response = await axios.delete(api);
    alert(response.data.msg);
    loadData();
  };

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
        <a href="#" onClick={() => myEdit(key._id)}>
          Edit
        </a>{" "}
        |{" "}
        <a href="#" onClick={() => myDelete(key._id)}>
          Delete
        </a>
      </td>
    </tr>
  ));

  return (
    <>
      <h1>Update Student Data</h1>
      <hr />
      <table align="center" width="500" border="1">
        <thead>
          <tr>
            <th>RollNo</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};

export default Update;
