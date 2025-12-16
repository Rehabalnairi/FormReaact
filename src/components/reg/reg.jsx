import React, { useState } from "react";
import "./reg.css";

const Reg = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  // Regex 
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const phoneRegex = /^[0-9]{8,12}$/;

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name must contain letters only";
    }


    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be 8+ chars, include uppercase, lowercase & number";
    }


    if (!formData.rePassword) {
      newErrors.rePassword = "Please confirm your password";
    } else if (formData.password !== formData.rePassword) {
      newErrors.rePassword = "Passwords do not match";
    }


    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone must be 8–12 digits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data:", formData);
      alert("Registration successful ");
    }
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Register Now</legend>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="form-group">
            <label>Re-Password</label>
            <input
              type="password"
              id="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
            />
            {errors.rePassword && (
              <p className="error">{errors.rePassword}</p>
            )}
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Reg;
