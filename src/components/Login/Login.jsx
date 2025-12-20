import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = () => {
    let newErrors = {};


    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

  
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    
    if (Object.keys(newErrors).length === 0) {
      console.log("Email:", email, "Password:", password);
      navigate("/home"); 
    }
  };

  return (
    <form className="container mt-5">
      <fieldset>
        <legend>Login Now</legend>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email</label>
          <input
            type="text"
            id="emailInput"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">Password</label>
          <input
            type="password"
            id="passwordInput"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="text-danger mt-1">{errors.password}</div>}
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-dark"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginForm;
