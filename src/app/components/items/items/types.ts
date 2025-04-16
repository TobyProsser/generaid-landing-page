import { Timestamp } from "firebase/firestore";

// types.ts
export type skillCategory = {
  name: string;
  icon: string;
  relatedSkills: string;
  startColor: string;
  endColor: string;
  id: string;
  description: string;
};

export type Skill = {
  id: string;
  name: string;
  desc: string;
  userDesc: string;
};

export type tag = {
  Name: string;
  id: string;
};
export type PostTags = {
  id: string;
  name: string;
  relatedCategory: string;
};
export type Post = {
  id: string;
  userId: string;
  city: string;
  title: string;
  description: string;
  price: number;
  skillCategoryId: string;
  timestamp: Timestamp;
  createdAt: Timestamp;
};
export type Review = {
  reviewerId: string;
  reviewerName: string;
  aboutId: string;
  rating: number;
  review: string;
  date: string;
  id: string;
};

export type Generation = {
  id: string;
  number: number;
  generation: string;
};

export type User = {
  id: string;
  username: string;
  name: string;
  interests: string[];
  rating: number;
  generation: Generation;
  email: string;
  photo: string;
  profilePicture: string;
  bio: string;
  posts: Post[];
  categories: skillCategory[];
  recentCategories: skillCategory[];
  reviews: Review[];
  skills: Skill[];
  messages: string[];
  friends: User[];
  startColor: string;
  endColor: string;
  icon: string;
  city: string;
  jobsCompleted: number;
};

export type AppRoutes =
  | "/index"
  | "/signup"
  | "/creatingprofile"
  | "/categoryselect"
  | "/homepage"
  | "/searchpage"
  | "/profilepage"
  | "/post"
  | "/recommendedfriendpage"
  | "/reviewsoverview"
  | "/messagespage"
  | "/viewallcategories"
  | "/interests"
  | "/reviews"
  | "/modal";
export interface ButtonData {
  startColor: string;
  endColor: string;
  title: string;
  path: AppRoutes;
}
