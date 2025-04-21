"use client";
import Header from "../components/items/items/sections/header";

const PDFPage = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="tab-page">
        <Header showLogo={true} />

        <section className="pdf-section">
          <h2 className="section-title">Project Proposal</h2>
          <div className="spacer" />
          <embed
            src="/pdfs/project-proposal.pdf"
            type="application/pdf"
            className="pdf-viewer"
          />
        </section>
        <div className="spacer" />
        <section className="pdf-section">
          <h2 className="section-title">Technical Documentation</h2>
          <div className="spacer" />
          <embed
            src="/pdfs/Technical-Documentation.pdf"
            type="application/pdf"
            className="pdf-viewer"
          />
        </section>
        <div className="spacer" />
      </div>
    </div>
  );
};

export default PDFPage;
