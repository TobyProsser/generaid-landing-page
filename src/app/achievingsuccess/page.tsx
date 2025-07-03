"use client"; 

import Colors from "@components/constants/Colors";
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
            <p className="section-subtitle" style={{ paddingLeft: "5%", paddingTop: 20, paddingBottom: 40 }}>
              <ul>
                <li>
                  <strong style={{color: Colors.darkGrey}}>Social Media Strategy</strong> – Targeting the <strong style={{fontWeight: 600}}>younger generation</strong> on TikTok with engaging, educational content and <strong>older users</strong> on Facebook through community-driven outreach.
                </li>
                <li>
                  <strong style={{color: Colors.darkGrey}}>Soft Launch Initiative</strong> – Starting in a <strong>college town with a high elderly population</strong>, ensuring early adoption and organic growth.
                </li>
                <li>
                  <strong style={{color: Colors.darkGrey}}>University Partnerships</strong> – Compiling a list of <strong>colleges with marketing, advertising, and business departments</strong> to recruit students for outreach efforts.
                </li>
                <li>
                  <strong style={{color: Colors.darkGrey}}>Senior Community Involvement</strong> – Collaborating with <strong>local elderly homes and retirement communities</strong> and offering them <strong>free subscriptions</strong> in return for feedback.
                </li>
              </ul>
            </p>
          </div>

          <div className="title-section">
            <h2 className="section-title">Marketing & Expansion</h2>
            <p className="section-subtitle" style={{ paddingLeft: "5%", paddingTop: 20, paddingBottom: 40 }}>
              Our outreach will include <strong>TikTok for younger audiences</strong> and <strong>Facebook for older demographics</strong>, ensuring widespread adoption across age groups.
            </p>
          </div>

          <div className="title-section">
            <h2 className="section-title">Soft Launch Execution</h2>
            <p className="section-subtitle" style={{ paddingLeft: "5%", paddingTop: 20, paddingBottom: 40 }}>
              The launch will begin with strategic engagement of <strong>colleges and senior communities</strong>, helping validate the need for the platform.
            </p>
          </div>

          <div className="title-section">
            <h2 className="section-title">Community Engagement</h2>
            <p className="section-subtitle" style={{ paddingLeft: "5%", paddingTop: 20, paddingBottom: 40 }}>
              Encouraging users to <strong>provide direct feedback</strong>, ensuring the app evolves into a highly intuitive and accessible platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePlanPage;
