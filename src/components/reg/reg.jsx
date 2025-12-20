import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
  const [success, setSuccess] = useState("");

  // Regex patterns
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

    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Name validation
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
        "Password must be at least 8 characters and include uppercase, lowercase, and a number";
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

    // If no errors
    if (Object.keys(newErrors).length === 0) {
      console.log("✅ Valid Form Data:", formData);
      setSuccess("Registration successful!");
      setFormData({
        name: "",
        email: "",
        password: "",
        rePassword: "",
        phone: "",
      });
    }
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Register Now</legend>

          {success && (
            <div className="alert alert-success text-center">
              {success}
            </div>
          )}

          {/* Name */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="alert alert-danger">{errors.name}</div>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="alert alert-danger">{errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="alert alert-danger">{errors.password}</div>
            )}
          </div>

          {/* Re-Password */}
          <div className="form-group">
            <label>Re-Password</label>
            <input
              type="password"
              id="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
            />
            {errors.rePassword && (
              <div className="alert alert-danger">{errors.rePassword}</div>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <div className="alert alert-danger">{errors.phone}</div>
            )}
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
