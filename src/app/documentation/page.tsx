"use client";

import Colors from "@components/constants/Colors";
import Header from "../components/sections/header";

const PDFPage = () => {
  return (
    <div style={{ display: "flex", background: "white", justifyContent: "center" }}>
      <div className="tab-page">
        <Header showLogo={true} />

        <section className="pdf-section">
          <h2 className="section-title">Project Proposal</h2>
          <div className="spacer" />
          <iframe src="/pdfs/project-proposal.pdf" className="pdf-viewer" />
          <div className="spacer" />
          <a 
  href="/pdfs/project-proposal.pdf" 
  download="Project-Proposal.pdf"
  className="text-white px-6 py-3 rounded-md shadow-md transition"
  style={{
    backgroundColor: Colors.darkGrey,
    display: "block",
    margin: "0 auto",
    textAlign: "center",
  }}
>
  Download PDF 📥
</a>
        </section>

        <div className="spacer" />

        <section className="pdf-section">
          <h2 className="section-title">Technical Documentation</h2>
          <div className="spacer" />
          <iframe src="/pdfs/Technical-Documentation.pdf" className="pdf-viewer" />
          <div className="spacer" />
          <a 
  href="/pdfs/Technical-Documentation.pdf" 
  download="Technical-Documentation.pdf"
  className="text-white px-6 py-3 rounded-md shadow-md transition"
  style={{
    backgroundColor: Colors.darkGrey,
    display: "block",
    margin: "0 auto",
    textAlign: "center",
  }}
>
  Download PDF 📥
</a>
        </section>

        <div className="spacer" />
      </div>
    </div>
  );
};

export default PDFPage;
