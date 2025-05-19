"use client"; 

import Header from "../components/sections/header";

const FuturePlanPage = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "white",
        justifyContent: "center",
      }}
    >
      <div className="future-plan-page">
        <Header showLogo={true} />

        <div className="future-plan-container">
          <div className="title-section">
            <h2 className="section-title">Future Plan</h2>
            <p
              className="section-subtitle"
              style={{
                paddingLeft: "5%",
                paddingTop: 20,
                paddingBottom: 40,
              }}
            >
              <ol>
                <li>
                  <strong>Social Media Strategy</strong> – Targeting the **younger generation** on TikTok with engaging, educational content and **older users** on Facebook through community-driven outreach.
                </li>
                <li>
                  <strong>Soft Launch Initiative</strong> – Starting in a **college town with a high elderly population**, ensuring early adoption and organic growth.
                </li>
                <li>
                  <strong>University Partnerships</strong> – Compiling a list of **colleges with marketing, advertising, and business departments** to recruit students for outreach efforts.
                </li>
                <li>
                  <strong>Senior Community Involvement</strong> – Collaborating with **local elderly homes and retirement communities** and offering them **free subscriptions** in return for feedback.
                </li>
              </ol>
            </p>
          </div>

          <div className="title-section">
            <h2 className="section-title">Marketing & Expansion</h2>
            <p
              className="section-subtitle"
              style={{
                paddingLeft: "5%",
                paddingTop: 20,
                paddingBottom: 40,
              }}
            >
              Our outreach will include **TikTok for younger audiences** and **Facebook for older demographics**, ensuring widespread adoption across age groups.
            </p>
          </div>

          <div className="title-section">
            <h2 className="section-title">Soft Launch Execution</h2>
            <p
              className="section-subtitle"
              style={{
                paddingLeft: "5%",
                paddingTop: 20,
                paddingBottom: 40,
              }}
            >
              The launch will begin with strategic engagement of **colleges and senior communities**, helping validate the need for the platform.
            </p>
          </div>

          <div className="title-section">
            <h2 className="section-title">Community Engagement</h2>
            <p
              className="section-subtitle"
              style={{
                paddingLeft: "5%",
                paddingTop: 20,
                paddingBottom: 40,
              }}
            >
              Encouraging users to **provide direct feedback**, ensuring the app evolves into a highly intuitive and accessible platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePlanPage;
