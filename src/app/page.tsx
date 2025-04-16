"use client";
// Assuming you have this
import Image from "next/image"; // Next.js optimized image component

import SearchBar from "./components/items/items/items/searchbar";
import SmallTextButton from "./components/items/items/items/smalltextbutton";
import MediumSlideBar from "./components/items/items/sliding/mediumslidebar";
export default function Home() {
  return (
    <div className="home-container">
      {/* Large Centered Image */}
      <Image
        src="/images/Logo.png"
        alt="Logo"
        width={600}
        height={400}
        className="home-image"
      />

      {/* Title Below Image */}
      <h1 className="home-title">Welcome to Project Generaid</h1>

      {/* Column Layout */}
      <div className="column-layout">
        <SearchBar height={50} />

        {/* Row of Gradient Buttons */}
        <div className="button-row">
          <SmallTextButton text="Categories" />
          <SmallTextButton text="Documentation" />
          <SmallTextButton text="Donate" />
          <SmallTextButton text="About" />
        </div>

        {/* Second Title */}
        <h2 className="section-title">Popular</h2>

        {/* MediumSlideBar Component */}
        <MediumSlideBar width={300} height={150} />
      </div>
    </div>
  );
}
