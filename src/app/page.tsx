"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  fakePosts,
  informationCategories,
  socialMediaCategories,
} from "../constants/HomeData";
import Header from "./components/sections/header";
import PageGrid from "./components/sections/pagegrid";
import MediumSlideBar from "./components/sliding/mediumslidebar";

export default function Home() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    document.body.style.zoom = "100%"; // Forces zoom level to default
    if (typeof window === "undefined") return; // Prevents SSR issues

    // Check if user has already scrolled
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!dataLoaded || hasScrolled) return; // Wait for data or cancel animation if user scrolled
    if (typeof window === "undefined") return;
    const scrollDown = () => {
      window.scrollTo({
        top: window.innerHeight / 3, // Adjust how far down you want to scroll
        behavior: "smooth",
      });
    };

    const scrollUp = () => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 1500); // Delay before scrolling up
    };

    scrollDown();
    scrollUp();
  }, [dataLoaded]); // Runs when `dataLoaded` changes

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 8, mass: 1 }}
      className="backgroundWrapper"
    >
      <div className="home-container">
        {/* Large Centered Image */}
        <img src="/images/Logo.png" alt="Logo" className="home-image" />
        <div className="headerSpacer" />
        <Header />
        <div className="mobileSpacer" />
        {/* Column Layout */}
        <div className="column-layout">
          {/* Second Title */}
          <h2 className="section-title">Popular</h2>

          {/* MediumSlideBar Component */}
          <div className="align-medium-bar">
            <MediumSlideBar
              width={300}
              height={150}
              setDataLoaded={setDataLoaded}
            />
          </div>
          <div className="spacer" />
          {/* Content Grid */}
          <div>
            <PageGrid
              posts={fakePosts}
              listData1={informationCategories}
              listData2={socialMediaCategories}
              images={[]}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
