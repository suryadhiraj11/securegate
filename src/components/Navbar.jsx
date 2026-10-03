
import { useNavigate } from "react-router-dom";
import { Bell, ShieldCheck, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const name = currentUser?.name || "User";
  const role = currentUser?.role || "Employee";

  return (
    <header className="navbar">
      <div>
        <h2>Zero Trust Security Portal</h2>
        <p>Application-level access management</p>
      </div>

      <div className="navbar-right">
        <div className="secure-status">
          <ShieldCheck size={18} />
          <span>Protected</span>
        </div>

        <Bell size={21} />

        <div className="user-info">
          <div className="avatar">
            {name.charAt(0).toUpperCase()}
          </div>

          <div>
            <strong>{name}</strong>
            <small>{role}</small>
          </div>
        </div>

        <button
          type="button"
          className="logout-button"
          onClick={handleLogout}
          title="Sign out"
        >
          <LogOut size={17} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
