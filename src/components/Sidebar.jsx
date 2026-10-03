import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  FileText,
  Activity,
  ShieldCheck,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <ShieldCheck size={28} />
        <span>SecureGate</span>
      </div>

      <nav className="navigation">
        <NavLink to="/dashboard">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/profile">
          <User size={20} />
          <span>My Profile</span>
        </NavLink>

        <NavLink to="/documents">
          <FileText size={20} />
          <span>Documents</span>
        </NavLink>

        <NavLink to="/logs">
          <Activity size={20} />
          <span>Access Logs</span>
        </NavLink>

        <NavLink to="/security">
          <ShieldCheck size={20} />
          <span>Security</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot"></span>
        System Protected
      </div>
    </aside>
  );
}

export default Sidebar;