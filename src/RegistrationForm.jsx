import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function RegistrationForm() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    district: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to backend
    axios.post("http://localhost:8080/api/users/register", user)
      .then(response => {
        alert("Registration Successful!");
        setUser({ name: "", phone: "", district: "" });
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error registering!", error);
        alert("Error registering user. Try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="input-group">
        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder=" " required />
        <label>Name</label>
      </div>

      <div className="input-group">
        <input type="tel" name="phone" value={user.phone} onChange={handleChange} placeholder=" " required />
        <label>Phone Number</label>
      </div>

      <div className="input-group">
        <input type="text" name="district" value={user.district} onChange={handleChange} placeholder=" " required />
        <label>District</label>
      </div>

      <button type="submit" className="btn">Register</button>
    </form>
  );
}

export default RegistrationForm;
