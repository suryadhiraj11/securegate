import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Mail,
  LockKeyhole,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    const result = login(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-brand">
          <div className="login-logo">
            <ShieldCheck size={32} />
          </div>

          <h1>SecureGate</h1>
          <p>Zero Trust Security Portal</p>
        </div>

        <div className="login-card">

          <div className="login-header">
            <p className="eyebrow">SECURE ACCESS</p>
            <h2>Welcome back</h2>
            <p>
              Sign in to access the protected application.
            </p>
          </div>

          {error && (
            <div className="login-error">
              <span>!</span>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>

            <div className="login-field">
              <label>Email Address</label>

              <div className="input-wrapper">
                <Mail size={18} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div className="login-field">
              <label>Password</label>

              <div className="input-wrapper">
                <LockKeyhole size={18} />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  required
                />
              </div>
            </div>

            <button type="submit" className="login-button">
              Sign In
              <ArrowRight size={18} />
            </button>

          </form>

          <div className="login-security">
            <CheckCircle2 size={17} />
            <span>Protected by Zero Trust security</span>
          </div>

        </div>

        <div className="demo-credentials">
          Don't have an account?{" "}
          <Link to="/signup">Create one</Link>
        </div>

      </div>
    </div>
  );
}

export default Login;