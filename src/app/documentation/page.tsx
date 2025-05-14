"use client";
import Header from "../components/sections/header";

const PDFPage = () => {
  return (
    <div
      style={{ display: "flex", background: "white", justifyContent: "center" }}
    >
      <div className="tab-page">
        <Header showLogo={true} />

        <section className="pdf-section">
          <h2 className="section-title">Project Proposal</h2>
          <div className="spacer" />
          <iframe src="/pdfs/project-proposal.pdf" className="pdf-viewer" />
        </section>
        <div className="spacer" />
        <section className="pdf-section">
          <h2 className="section-title">Technical Documentation</h2>
          <div className="spacer" />
          <iframe
            src="/pdfs/Technical-Documentation.pdf"
            className="pdf-viewer"
          />
        </section>
        <div className="spacer" />
      </div>
    </div>
  );
};

export default PDFPage;
