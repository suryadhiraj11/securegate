
import { useMemo, useState } from "react";
import {
  FileText,
  Download,
  ShieldCheck,
  LockKeyhole,
  Search,
  X,
} from "lucide-react";

const documents = [
  {
    id: 1,
    name: "Employee Handbook",
    type: "Policy",
    format: "PDF Document",
    size: "2.4 MB",
    description:
      "Employee responsibilities, workplace guidelines, and organizational policies.",
  },
  {
    id: 2,
    name: "Security Policy",
    type: "Security",
    format: "PDF Document",
    size: "1.1 MB",
    description:
      "Security guidelines, access-control principles, and data protection rules.",
  },
  {
    id: 3,
    name: "Company Guidelines",
    type: "Guidelines",
    format: "PDF Document",
    size: "850 KB",
    description:
      "General guidelines for using company applications and resources.",
  },
];

function Documents() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [accessMessage, setAccessMessage] = useState("");

  const filteredDocuments = useMemo(() => {
    return documents.filter((document) => {
      const matchesSearch = document.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || document.type === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const openDocument = (document) => {
    setAccessMessage("");
    setSelectedDocument(document);
  };

  const closeDocument = () => {
    setSelectedDocument(null);
    setAccessMessage("");
  };

  const simulateAccess = () => {
    setAccessMessage(
      "DEMO ONLY: Access request simulated. No real AWS policy or document permission was checked."
    );
  };

  return (
    <div className="inner-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">PROTECTED RESOURCES</p>
          <h1>Documents</h1>
          <p className="page-description">
            Find resources and explore the access-request demo.
          </p>
        </div>

        <div className="security-badge">
          <LockKeyhole size={17} />
          Demo Resources
        </div>
      </div>

      <div className="documents-notice">
        <ShieldCheck size={22} />

        <div>
          <strong>Zero Trust access demonstration</strong>
          <p>
            The controls below demonstrate the user experience.
            Real authorization will be enforced by the backend and
            AWS infrastructure after integration.
          </p>
        </div>
      </div>

      <div className="documents-toolbar">
        <div className="document-search">
          <Search size={18} />

          <input
            type="search"
            placeholder="Search documents..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search documents"
          />
        </div>

        <select
          className="document-filter"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          aria-label="Filter by document category"
        >
          <option value="All">All categories</option>
          <option value="Policy">Policy</option>
          <option value="Security">Security</option>
          <option value="Guidelines">Guidelines</option>
        </select>
      </div>

      <div className="documents-count">
        Showing {filteredDocuments.length} of {documents.length} documents
      </div>

      <div className="documents-grid">
        {filteredDocuments.map((document) => (
          <div className="document-card" key={document.id}>
            <div className="document-icon">
              <FileText size={25} />
            </div>

            <div className="document-info">
              <h3>{document.name}</h3>
              <p>
                {document.format} · {document.size}
              </p>
              <span className="document-category">
                {document.type}
              </span>
            </div>

            <button
              type="button"
              className="document-button"
              onClick={() => openDocument(document)}
            >
              <Download size={16} />
              Access
            </button>
          </div>
        ))}
      </div>

      {filteredDocuments.length === 0 && (
        <div className="documents-empty">
          <FileText size={28} />
          <h3>No documents found</h3>
          <p>Try a different search term or category.</p>
        </div>
      )}

      {selectedDocument && (
        <div
          className="document-modal-backdrop"
          onClick={closeDocument}
        >
          <section
            className="document-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="document-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="document-modal-header">
              <div className="document-icon">
                <FileText size={24} />
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={closeDocument}
                aria-label="Close document details"
              >
                <X size={20} />
              </button>
            </div>

            <p className="eyebrow">RESOURCE DETAILS</p>

            <h2 id="document-modal-title">
              {selectedDocument.name}
            </h2>

            <p className="modal-description">
              {selectedDocument.description}
            </p>

            <div className="document-metadata">
              <span>Format</span>
              <strong>{selectedDocument.format}</strong>

              <span>Size</span>
              <strong>{selectedDocument.size}</strong>

              <span>Category</span>
              <strong>{selectedDocument.type}</strong>
            </div>

            <button
              type="button"
              className="login-button"
              onClick={simulateAccess}
            >
              <ShieldCheck size={18} />
              Simulate Access Request
            </button>

            {accessMessage && (
              <div className="access-demo-message" role="status">
                {accessMessage}
              </div>
            )}

            <p className="modal-footnote">
              Demo only. This does not download or reveal a real file.
            </p>
          </section>
        </div>
      )}
    </div>
  );
}

export default Documents;
