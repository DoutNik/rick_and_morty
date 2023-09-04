import React, { useState } from "react";
import validation from "../components/Validation";
import './Form.css';

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });

    setErrors(validation({
      ...errors,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.login(userData);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label className="input-label">e-mail:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <label className="input-label">password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
