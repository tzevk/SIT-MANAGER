import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    role: "",
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.role || !form.username || !form.password) {
      setError("All fields are required.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      console.log("Login submitted:", form);
      // Store user data in localStorage
      localStorage.setItem("user", JSON.stringify({
        username: form.username,
        role: form.role
      }));
      // Redirect to dashboard
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="login-container">
      {/* LEFT BRANDING SECTION */}
      <div className="login-left">
        <div className="brand">
          <h1>SIT Manager</h1>
          <p>Empowering Education Through Technology</p>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="login-right">
        <div className="login-card">
          <h2 className="login-title">GET STARTED</h2>
          <p className="login-subtitle">Sign in to continue</p>

          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            >
              <option value="">Select role</option>
              <option value="Admin">Admin</option>
              <option value="Sub Admin">Sub Admin</option>
            </select>

            {error && <p className="error-msg">{error}</p>}

            <button
              type="submit"
              className="login-btn"
              disabled={loading || !form.role || !form.username || !form.password}
            >
              {loading ? "Signing in..." : "Login"}
            </button>

            <div className="login-footer">
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
