import { Timestamp } from "firebase/firestore";
import Colors from "../constants/Colors";
import { Post, skillCategory } from "../constants/types";

export const informationCategories: skillCategory[] = [
  {
    id: "1",
    name: "What's Our Goal?",
    icon: "flag",
    relatedSkills: "/goals",
    startColor: Colors.pinkBlueStart,
    endColor: Colors.pinkBlueEnd,
    description: "Our mission and vision statements along with...",
  },
  {
    id: "2",
    name: "Where We Are",
    icon: "bar-chart",
    relatedSkills: "/whereweare",
    startColor: Colors.pinkRedStart,
    endColor: Colors.pinkRedEnd,
    description: "This is an updated blog to keep up to date on the...",
  },
  {
    id: "3",
    name: "How We Achieve Success",
    icon: "paint-brush",
    relatedSkills: "Figma, Adobe XD, Wireframing",
    startColor: Colors.yellowGreenStart,
    endColor: Colors.yellowGreenEnd,
    description: "The road map to reach our vision by completing the...",
  },
];

export const socialMediaCategories: skillCategory[] = [
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

export const fakePosts: Post[] = [
  {
    id: "post_001",
    userId: "user_123",
    city: "San Francisco",
    title: "Freelance Web Developer Needed",
    description:
      "Looking for someone to help me garden on saturdays. I have a small vegetable garden in my backyard and just...",
    price: 15,
    skillCategoryId: "Cat-22",
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
