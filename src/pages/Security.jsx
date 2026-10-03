import {
  ShieldCheck,
  UserCheck,
  KeyRound,
  FileCheck,
  Server,
  CheckCircle2,
  Info,
} from "lucide-react";

function Security() {
  const checks = [
    {
      number: "01",
      title: "Identity Verification",
      description:
        "The user's identity must be verified before application access is considered.",
      icon: UserCheck,
    },
    {
      number: "02",
      title: "Authentication",
      description:
        "The request must satisfy the configured authentication requirements.",
      icon: KeyRound,
    },
    {
      number: "03",
      title: "Access Policy",
      description:
        "The user's identity and request are evaluated against the application access policy.",
      icon: FileCheck,
    },
    {
      number: "04",
      title: "Application Access",
      description:
        "Only requests that satisfy the policy are allowed to reach the protected application.",
      icon: Server,
    },
  ];

  return (
    <div className="inner-page">

      <div className="page-heading">
        <div>
          <p className="eyebrow">ZERO TRUST ARCHITECTURE</p>

          <h1>Security Center</h1>

          <p className="page-description">
            Understand how access to the application is evaluated.
          </p>
        </div>

        <div className="security-badge">
          <ShieldCheck size={17} />
          Zero Trust Active
        </div>
      </div>

      {/* Main concept */}

      <section className="zero-trust-intro">

        <div className="zero-trust-icon">
          <ShieldCheck size={34} />
        </div>

        <div>
          <p className="eyebrow">SECURITY PRINCIPLE</p>

          <h2>Never Trust. Always Verify.</h2>

          <p>
            Access is evaluated according to identity and policy instead of
            automatically trusting a user because they can reach the network.
          </p>
        </div>

      </section>

      {/* Evaluation process */}

      <section className="section">

        <div className="section-heading">
          <div>
            <h2>Access Evaluation Process</h2>

            <p>
              Every request passes through multiple security checks.
            </p>
          </div>
        </div>

        <div className="security-process">

          {checks.map((check, index) => {

            const Icon = check.icon;

            return (
              <div className="process-item" key={check.number}>

                <div className="process-number">
                  {check.number}
                </div>

                <div className="process-icon">
                  <Icon size={21} />
                </div>

                <div className="process-content">

                  <h3>{check.title}</h3>

                  <p>{check.description}</p>

                </div>

                <CheckCircle2
                  className="process-check"
                  size={19}
                />

                {index !== checks.length - 1 && (
                  <div className="process-line"></div>
                )}

              </div>
            );
          })}

        </div>

      </section>

      {/* Architecture explanation */}

      <section className="security-explanation">

        <div className="explanation-header">
          <Info size={18} />

          <div>
            <h2>Why Zero Trust?</h2>

            <p>
              Authentication alone does not determine what a user can access.
            </p>
          </div>
        </div>

        <div className="comparison">

          <div className="comparison-card traditional">

            <span>TRADITIONAL APPROACH</span>

            <h3>Authenticate → Trust</h3>

            <p>
              After successful authentication, users may receive broad access
              based on network location or role.
            </p>

          </div>

          <div className="comparison-arrow">
            VS
          </div>

          <div className="comparison-card zero-trust">

            <span>ZERO TRUST APPROACH</span>

            <h3>Verify → Evaluate → Allow</h3>

            <p>
              Each application request is evaluated against identity and
              access policies before access is granted.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Security;