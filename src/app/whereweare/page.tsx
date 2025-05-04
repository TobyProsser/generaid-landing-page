"use client"; // Required for state and effects

//import CircularCarousel from "../components/carousels/circularcarousel";
import ImageCarousel from "../components/carousels/imagecarousel";
import RotatingCarousel from "../components/carousels/rotatingcarousel";
import RowCarousel from "../components/carousels/rowcarousel";
import StackCarousel from "../components/carousels/stackcarousel";
import MultiItemCarousel from "../components/carousels/swiper";
import Header from "../components/sections/header";

const images = [
  "/images/square_1200_1200.png",
  "/images/square_1200_1200.png",
  "/images/square_1200_1200.png",
  "/images/square_1200_1200.png",
];

const messagePosts = [
  "/images/MissionStatement.png",
  "/images/SomethingNew.png",
  "/images/VisionStatement.png",
  "/images/square_1200_1200.png",
];
const secondMessagePosts = [
  "/images/MissionStatement.png",
  "/images/SomethingNew.png",
  "/images/VisionStatement.png",
  "/images/square_1200_1200.png",
];

const WherewWeArePage = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="goals-page">
        <Header showLogo={true} />

        <div className="goals-page-container">
          <div className="title-section">
            <h1 className="title">The App</h1>
            <RowCarousel images={messagePosts} />
            <h2 className="section-title">UI / UX Design</h2>
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
                  The UI/UX design of Generaid prioritizes accessibility for
                  users of all ages and technical backgrounds, ensuring a
                  seamless experience regardless of digital proficiency. The
                  interface is intentionally structured to guide users
                  intuitively, minimizing confusion and allowing them to
                  navigate tasks with ease—even if they click the wrong option,
                  the flow ensures they always end up where they need to be. The
                  modern aesthetic reflects the spirit of intergenerational
                  collaboration in today&apos;s digital age, striking a balance
                  between professionalism, trustworthiness, and an engaging,
                  interactive experience. Every design choice—from clear
                  typography to thoughtful color schemes—reinforces the goal of
                  making the platform welcoming, functional, and user-friendly.
                </li>
              </ol>
            </p>
          </div>

          <div className="title-section">
            <h2 className="section-title">Onboarding Screens:</h2>
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
            <MultiItemCarousel images={images} />
          </div>

          <div className="title-section">
            <h2 className="section-title">Task Posting Flow</h2>
            <p
              className="section-subtitle"
              style={{
                paddingLeft: "5%",
                paddingTop: 20,
                paddingBottom: 40,
              }}
            >
              From the home page, users can type in a request for assistance,
              and in the next step, AI refines their input into a clear, concise
              help request. The platform ensures that each request is
              well-structured and easily understood, making it simple for
              helpers to respond. AI-driven categorization suggests three
              relevant categories, ensuring the request is sorted effectively.
              Additionally, AI scans the request to flag any inappropriate or
              off-platform tasks, maintaining a safe and focused community for
              users seeking and offering assistance
            </p>

            <ImageCarousel images={images} />
          </div>
          <div className="title-section">
            <h2 className="section-title">Modern Aesthetic & Branding</h2>
            <p
              className="section-subtitle"
              style={{
                paddingLeft: "5%",
                paddingTop: 20,
                paddingBottom: 40,
              }}
            >
              An intuitive interface built for accessibility, trust, and ease of
              use.
            </p>

            <div className="spacer" />
            <div className="spacer" />
            <RotatingCarousel images={images} />

            <div className="spacer" />
          </div>
          <div className="title-section">
            <h2 className="section-title">Frontend Development</h2>
            <p
              className="section-subtitle"
              style={{
                paddingLeft: "5%",
                paddingTop: 20,
                paddingBottom: 40,
              }}
            >
              Generaid&apos;s frontend is built with React Native to ensure
              smooth cross-platform usability. The UI is designed to be highly
              interactive, intuitive, and accessible for users of all ages and
              technical backgrounds. Dynamic elements such as AI-generated help
              requests, categorized task sorting, and guided navigation create a
              seamless experience. Special attention has been given to
              responsive design, ensuring layouts adapt flawlessly across mobile
              and desktop devices. The platform&apos;s modern aesthetic not only
              reinforces its purpose—bridging generations in the digital age—but
              also establishes trust through its professional yet engaging
              interface.
            </p>
          </div>
          <div className="title-section">
            <h2 className="section-title">Backend Development</h2>
            <p
              className="section-subtitle"
              style={{
                paddingLeft: "5%",
                paddingTop: 20,
                paddingBottom: 40,
              }}
            >
              Generaid&apos;s backend leverages Firebase and Firestore for
              efficient real-time data handling and user management.
              OpenAI&apos;s API enhances post creation by refining requests into
              structured, clear task descriptions while also suggesting relevant
              categories for organization. AI-driven moderation ensures that
              inappropriate or off-platform tasks are automatically flagged to
              maintain safety and integrity. The database is structured for
              scalability, optimizing search functionality and categorization.
              Security is a core priority, with Firebase offering robust
              protections while minimizing personal data collection to
              prioritize user privacy. Helpers undergo a one-time background
              check before accepting tasks, ensuring a secure environment for
              meaningful connections.
            </p>
          </div>
          <div className="title-section">
            <h1 className="title">The website</h1>
            <h2 className="section-title">Information Center</h2>
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
                  The Generaid website provides a clear and engaging space where
                  visitors can learn about the platform, its mission, and
                  current progress. Designed with the same modern aesthetic and
                  intuitive layout as the app, it ensures a seamless transition
                  between exploring the website and using Generaid&apos;s
                  services. The cohesive design reinforces brand identity,
                  making users instantly recognize they are interacting with a
                  Generaid product while maintaining accessibility and ease of
                  navigation.
                </li>
              </ol>
            </p>
          </div>
          <div className="title-section">
            <h1 className="title">Social Media {`\n`} & Brand Communication</h1>
            <h2 className="section-title">Statement Posts</h2>

            <StackCarousel images={secondMessagePosts} />
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
                  Generaid&apos;s statement posts communicate important updates,
                  values, and community initiatives. These posts ensure
                  transparency while reinforcing the platform&apos;s commitment
                  to fostering intergenerational connections. Whether announcing
                  new features, sharing success stories, or addressing social
                  impact, each post is designed to engage users and highlight
                  the meaningful relationships Generaid helps create.
                </li>
              </ol>
            </p>
          </div>
          <div className="title-section">
            <h2 className="section-title">Collaboration Posts</h2>
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
                  Collaborations with brands and companies allow Generaid to
                  expand its reach and amplify its mission. These posts showcase
                  partnerships that align with Generaid&apos;s values, whether
                  through joint initiatives, community programs, or shared goals
                  that encourage accessibility and assistance across
                  generations. Each collaboration is an opportunity to
                  strengthen engagement and inspire users to connect in new
                  ways.
                </li>
              </ol>
            </p>
          </div>
          <div className="title-section">
            <h2 className="section-title">Design Language & Consistency</h2>
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
                  Generaid maintains a unified and recognizable design language
                  across its app, website, and social media presence. The modern
                  aesthetic reflects intergenerational collaboration, balancing
                  warmth and professionalism to establish trust and usability.
                  Consistent typography, color schemes, and structured layouts
                  ensure that users intuitively recognize and navigate
                  Generaid&apos;s ecosystem. This seamless transition reinforces
                  the brand&apos;sidentity while making the experience engaging,
                  accessible, and familiar.
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WherewWeArePage;
