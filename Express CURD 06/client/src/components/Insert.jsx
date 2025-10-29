import React, { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [val, setval] = useState({
    rollno: "",
    name: "",
    city: "",
    fees: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setval((prev) => ({ ...prev, [name]: value }));
  };

  const subData = async (e) => {
    e.preventDefault();
    try {
      const api = "http://localhost:8000/student/save";
      const response = await axios.post(api, val);
      console.log(response.data);
      alert("Data saved successfully!");
      setval({ rollno: "", name: "", city: "", fees: "" }); // clear form
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data!");
    }
  };

  return (
    <div align="center">
      <h1>Insert Student Data</h1>
      <form onSubmit={subData}>
        <p>
          Enter Roll No:{" "}
          <input
            type="text"
            name="rollno"
            value={val.rollno}
            onChange={handleInput}
          />
        </p>
        <p>
          Enter Name:{" "}
          <input
            type="text"
            name="name"
            value={val.name}
            onChange={handleInput}
          />
        </p>
        <p>
          Enter City:{" "}
          <input
            type="text"
            name="city"
            value={val.city}
            onChange={handleInput}
          />
        </p>
        <p>
          Enter Fees:{" "}
          <input
            type="text"
            name="fees"
            value={val.fees}
            onChange={handleInput}
          />
        </p>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Insert;
