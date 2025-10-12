import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MyEdit = () => {
  const { id } = useParams();
  const [mydata, setmydata] = useState({
    rollno: "",
    name: "",
    city: "",
    fees: ""
  });

  const loadData = async () => {
    let api = `http://localhost:3001/student/editdisplay/${id}`;
    const response = await axios.get(api);
    console.log(response.data);
    setmydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setmydata((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    let api = "http://localhost:3001/student/editdatasave";
    const response = await axios.post(api, mydata);
    alert(response.data.msg);
  };

  return (
    <>
      <h1>Edit Data</h1>
      Roll No:{" "}
      <input
        type="text"
        name="rollno"
        value={mydata.rollno}
        onChange={handleInput}
      />
      <br />
      Name:{" "}
      <input
        type="text"
        name="name"
        value={mydata.name}
        onChange={handleInput}
      />
      <br />
      City:{" "}
      <input
        type="text"
        name="city"
        value={mydata.city}
        onChange={handleInput}
      />
      <br />
      Fees:{" "}
      <input
        type="text"
        name="fees"
        value={mydata.fees}
        onChange={handleInput}
      />
      <br />
      <button onClick={handleSubmit}>Update</button>
    </>
  );
};

export default MyEdit;
