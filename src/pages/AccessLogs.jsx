import {
  Activity,
  CheckCircle2,
  XCircle,
  UserCheck,
  FileText,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";

function AccessLogs() {
  const logs = [
    {
      time: "16:42:18",
      user: "Surya",
      resource: "Employee Dashboard",
      action: "Application Access",
      result: "ALLOWED",
      type: "success",
      icon: UserCheck,
    },
    {
      time: "16:43:05",
      user: "Surya",
      resource: "Employee Handbook",
      action: "Resource Access",
      result: "ALLOWED",
      type: "success",
      icon: FileText,
    },
    {
      time: "16:44:31",
      user: "Surya",
      resource: "Security Policy",
      action: "Policy Evaluation",
      result: "PASSED",
      type: "success",
      icon: ShieldCheck,
    },
    {
      time: "16:47:12",
      user: "Guest",
      resource: "Admin Dashboard",
      action: "Application Access",
      result: "DENIED",
      type: "denied",
      icon: LockKeyhole,
    },
    {
      time: "16:49:07",
      user: "Unknown",
      resource: "Employee Data",
      action: "Resource Access",
      result: "DENIED",
      type: "denied",
      icon: XCircle,
    },
  ];

  return (
    <div className="inner-page">

      <div className="page-heading">
        <div>
          <p className="eyebrow">SECURITY MONITORING</p>

          <h1>Access Logs</h1>

          <p className="page-description">
            Monitor application access and Zero Trust policy decisions.
          </p>
        </div>

        <div className="security-badge">
          <Activity size={17} />
          Monitoring Active
        </div>
      </div>

      {/* Summary */}

      <div className="log-summary">

        <div className="log-stat">
          <div className="log-stat-icon green">
            <CheckCircle2 size={20} />
          </div>

          <div>
            <strong>3</strong>
            <span>Allowed Requests</span>
          </div>
        </div>

        <div className="log-stat">
          <div className="log-stat-icon red">
            <XCircle size={20} />
          </div>

          <div>
            <strong>2</strong>
            <span>Denied Requests</span>
          </div>
        </div>

        <div className="log-stat">
          <div className="log-stat-icon blue">
            <ShieldCheck size={20} />
          </div>

          <div>
            <strong>100%</strong>
            <span>Policy Evaluation</span>
          </div>
        </div>

      </div>

      {/* Logs */}

      <section className="logs-panel">

        <div className="logs-header">
          <div>
            <h2>Recent Access Requests</h2>
            <p>Application-level security activity</p>
          </div>

          <span className="live-indicator">
            <span></span>
            LIVE
          </span>
        </div>

        <div className="logs-table">

          <div className="logs-row logs-table-header">
            <span>TIME</span>
            <span>USER</span>
            <span>RESOURCE</span>
            <span>ACTION</span>
            <span>RESULT</span>
          </div>

          {logs.map((log, index) => {

            const Icon = log.icon;

            return (
              <div className="logs-row" key={index}>

                <span className="log-time">
                  {log.time}
                </span>

                <span className="log-user">
                  <Icon size={15} />
                  {log.user}
                </span>

                <span className="log-resource">
                  {log.resource}
                </span>

                <span className="log-action">
                  {log.action}
                </span>

                <span className={`log-result ${log.type}`}>
                  {log.type === "success" ? (
                    <CheckCircle2 size={14} />
                  ) : (
                    <XCircle size={14} />
                  )}

                  {log.result}
                </span>

              </div>
            );
          })}

        </div>

      </section>

    </div>
  );
}

export default AccessLogs;