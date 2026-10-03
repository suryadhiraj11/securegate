import { useAuth } from "../context/AuthContext";
import {
  User,
  Mail,
  BriefcaseBusiness,
  Building2,
  ShieldCheck,
  KeyRound,
} from "lucide-react";

function Profile() {
  const { currentUser } = useAuth();

const name = currentUser?.name || "User";
const email = currentUser?.email || "";
const role = currentUser?.role || "Employee";
const department = currentUser?.department || "Not specified";
  return (
    <div className="inner-page">

      <div className="page-heading">
        <div>
          <p className="eyebrow">ACCOUNT</p>

          <h1>My Profile</h1>

          <p className="page-description">
            Identity and authentication information.
          </p>
        </div>

        <div className="security-badge">
          <ShieldCheck size={18} />
          Identity Verified
        </div>
      </div>

      <div className="profile-grid">

        <section className="profile-card profile-main">

          <div className="profile-avatar">
            {name.charAt(0).toUpperCase()}
          </div>

          <h2>{name}</h2>
          <p className="profile-role">
            Software Engineering Student
          </p>

          <div className="profile-status">
            <span></span>
            Authenticated
          </div>

        </section>

        <section className="panel profile-details">

          <div className="panel-header">
            <div>
              <h2>Identity Information</h2>
              <p>Verified account details</p>
            </div>

            <User size={20} />
          </div>

          <div className="details-list">

            <div className="detail-row">
              <Mail size={18} />
              <div>
                <span>Email</span>
                <strong>{email}</strong>
              </div>
            </div>

            <div className="detail-row">
              <BriefcaseBusiness size={18} />
              <div>
                <span>Role</span>
                <strong>{role}</strong>
              </div>
            </div>

            <div className="detail-row">
              <Building2 size={18} />
              <div>
                <span>Department</span>
                <strong>{department}</strong>
              </div>
            </div>

            <div className="detail-row">
              <KeyRound size={18} />
              <div>
                <span>Authentication</span>
                <strong className="success-text">
                  Verified
                </strong>
              </div>
            </div>

          </div>

        </section>

      </div>

    </div>
  );
}

export default Profile;