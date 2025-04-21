"use client";
// Assuming you have this
import Image from "next/image"; // Next.js optimized image component

import { Timestamp } from "firebase/firestore";
import Colors from "../../constants/Colors";
import Header from "./components/items/items/sections/header";
import PageGrid from "./components/items/items/sections/pagegrid";
import MediumSlideBar from "./components/items/items/sliding/mediumslidebar";
import { Post, skillCategory } from "./components/items/items/types";
const informationCategories: skillCategory[] = [
  {
    id: "1",
    name: "What's Our Goal?",
    icon: "flag",
    relatedSkills: "/goals",
    startColor: "#FF5733",
    endColor: "#FFBD33",
    description: "Our mission and vision statements along with...",
  },
  {
    id: "2",
    name: "Where We Are",
    icon: "bar-chart",
    relatedSkills: "Python, Pandas, Machine Learning",
    startColor: "#33FF57",
    endColor: "#33FFBD",
    description: "This is an updated blog to keep up to date on the...",
  },
  {
    id: "3",
    name: "How We Achieve Success",
    icon: "paint-brush",
    relatedSkills: "Figma, Adobe XD, Wireframing",
    startColor: "#5733FF",
    endColor: "#BD33FF",
    description: "The road map to reach our vision by completing the...",
  },
];

const socialMediaCategories: skillCategory[] = [
  {
    id: "social1",
    name: "Instagram",
    icon: "logo-instagram",
    relatedSkills: "HTML, CSS, JavaScript, React",
    startColor: Colors.orangePinkStart,
    endColor: Colors.orangePinkEnd,
    description: "Follow us on Instagram!",
  },
  {
    id: "social2",
    name: "logo-facebook",
    icon: "logo-facebook",
    relatedSkills: "Python, Pandas, Machine Learning",
    startColor: Colors.darkBlueStart,
    endColor: Colors.darkBlueEnd,
    description: "Follow us on Facebook!",
  },
];

const fakePosts: Post[] = [
  {
    id: "post_001",
    userId: "user_123",
    city: "San Francisco",
    title: "Freelance Web Developer Needed",
    description:
      "Looking for an experienced React developer to build a dashboard UI.",
    price: 1200,
    skillCategoryId: "category_001",
    timestamp: Timestamp.fromDate(new Date()), // Convert Date to Timestamp
    createdAt: Timestamp.fromDate(new Date()), // Convert Date to Timestamp
  },
  {
    id: "post_002",
    userId: "user_456",
    city: "New York",
    title: "Graphic Design for Startup",
    description:
      "Seeking a designer to create a modern logo and branding assets.",
    price: 800,
    skillCategoryId: "category_002",
    timestamp: Timestamp.fromDate(new Date()), // Convert Date to Timestamp
    createdAt: Timestamp.fromDate(new Date()), // Convert Date to Timestamp
  },
  {
    id: "post_003",
    userId: "user_789",
    city: "Los Angeles",
    title: "Marketing Consultation",
    description:
      "Need an expert in digital marketing strategies for a new eCommerce business.",
    price: 1500,
    skillCategoryId: "category_003",
    timestamp: Timestamp.fromDate(new Date()), // Convert Date to Timestamp
    createdAt: Timestamp.fromDate(new Date()), // Convert Date to Timestamp
  },
];

export default function Home() {
  return (
    <div className="backgroundWrapper">
      <div className="home-container">
        {/* Large Centered Image */}
        <Image
          src="/images/Logo.png"
          alt="Logo"
          width={600}
          height={400}
          className="home-image"
        />

        <Header />

        {/* Column Layout */}
        <div className="column-layout">
          {/* Second Title */}
          <h2 className="section-title">Popular</h2>

          {/* MediumSlideBar Component */}
          <MediumSlideBar width={300} height={150} />
          {/* Content Grid */}
          <PageGrid
            posts={fakePosts}
            listData1={informationCategories}
            listData2={socialMediaCategories}
            images={[]}
          />
        </div>
      </div>
    </div>
  );
}
