import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  User,
  Mail,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Employee");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    const result = signup(
      name,
      email,
      password,
      role
    );

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/login");
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
            <p className="eyebrow">CREATE ACCOUNT</p>
            <h2>Join SecureGate</h2>
            <p>
              Create your identity to access the protected application.
            </p>
          </div>

          {error && (
            <div className="login-error">
              <span>!</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSignup}>

            <div className="login-field">
              <label>Full Name</label>

              <div className="input-wrapper">
                <User size={18} />

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  required
                />
              </div>
            </div>

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
              <label>Role</label>

              <div className="input-wrapper">
                <User size={18} />

                <select
                  value={role}
                  onChange={(event) =>
                    setRole(event.target.value)
                  }
                >
                  <option value="Employee">Employee</option>
                  <option value="Manager">Manager</option>
                  <option value="Administrator">Administrator</option>
                </select>
              </div>
            </div>

            <div className="login-field">
              <label>Password</label>

              <div className="input-wrapper">
                <LockKeyhole size={18} />

                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div className="login-field">
              <label>Confirm Password</label>

              <div className="input-wrapper">
                <LockKeyhole size={18} />

                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                  required
                />
              </div>
            </div>

            <button type="submit" className="login-button">
              Create Account
              <ArrowRight size={18} />
            </button>

          </form>

          <div className="login-security">
            <ShieldCheck size={17} />
            <span>Your identity will be evaluated by Zero Trust policies</span>
          </div>

        </div>

        <div className="demo-credentials">
          Already have an account?{" "}
          <Link to="/login">Sign in</Link>
        </div>

      </div>
    </div>
  );
}

export default Signup;