import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function RegistrationForm() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    district: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const API_URL = `${process.env.REACT_APP_API_URL}/register`;

    axios
      .post(API_URL, user)
      .then((response) => {
        alert("Registration Successful!");
        setUser({ name: "", phone: "", district: "" });
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error registering user!", error);
        alert("Error registering user. Try again.");
      });
  };

  return (
    <div className="form-wrapper">
      <div className="form-box">
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Phone Number</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="district"
              value={user.district}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>District</label>
          </div>

          <button type="submit" className="btn-submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
