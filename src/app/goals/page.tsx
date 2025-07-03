"use client"; // Required for state and effects
import Header from "../components/sections/header";

const GoalsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "white",
        justifyContent: "center",
      }}
    >
      <div className="goals-page">
        <Header showLogo={true} />

        <div className="goals-page-container">
          <div className="title-section">
            <h2 className="section-title">Our Goal</h2>
            <p
              className="section-subtitle"
              style={{
                paddingLeft: "5%",
                paddingTop: 20,
                paddingBottom: 40,
              }}
            >
              <ol>
                <li style={{ marginBottom: 40 }}>
                  <span className="bold">
                    Facilitate Intergenerational Support and Connection
                  </span>
                  – Bridge generational gaps by seamlessly connecting
                  individuals of different ages, fostering stronger communities
                  within cities. By enabling meaningful exchanges of assistance,
                  the app encourages collaboration and learning between
                  generations that lay the foundations for lasting
                  intergenerational friendships.
                </li>
                <li>
                  <span className="bold">
                    Provide Accessible Task Assistance and Income Opportunities
                  </span>
                  – Offer a platform where users can request help with tasks
                  while giving others a flexible way to earn income.
                </li>
              </ol>
            </p>
          </div>

          <div className="title-section">
            <h2 className="section-title">Mission Statment</h2>
            <p
              className="section-subtitle"
              style={{
                paddingLeft: "5%",
                paddingTop: 20,
                paddingBottom: 40,
              }}
            >
              To bridge generations through meaningful connections, fostering
              stronger, united communities within our cities.
            </p>
          </div>

          <div className="title-section">
            <h2 className="section-title">Vision Statement</h2>
            <p
              className="section-subtitle"
              style={{
                paddingLeft: "5%",
                paddingTop: 20,
                paddingBottom: 40,
              }}
            >
              A world where intergenerational relationships strengthen the
              fabric of society, creating inclusive and resilient communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsPage;
