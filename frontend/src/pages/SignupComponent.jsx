import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();


  const { error, loading, success, handleSignup } = useSignup();
  const signup = async (e) => {
    // iteration4: no changes to backend
    if (password === password2) {
      e.preventDefault();
      await handleSignup({ email, password }, { setIsAuthenticated });
      navigate("/");
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <label>
        email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Repeat password:
        <input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </label>
      <br />
      <button onClick={signup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
