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

    // Track user scrolling to prevent animation from replaying
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!dataLoaded || hasScrolled) return; // Stop animation if user has scrolled
    if (typeof window === "undefined") return;

    const scrollDown = () => {
      window.scrollTo({
        top: window.innerHeight / 3,
        behavior: "smooth",
      });
    };

    const scrollUp = () => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 1500);
    };

    scrollDown();
    scrollUp();
  }, [dataLoaded, hasScrolled]); // Prevent animation replay if user already scrolled

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 8, mass: 1 }}
      className="backgroundWrapper"
    >
      <div className="home-container">
        <img src="/images/Logo.png" alt="Logo" className="home-image" />
        <div className="headerSpacer" />
        <Header />
        <div className="mobileSpacer" />
        <div className="column-layout">
          <h2 className="section-title">Popular</h2>
          <div className="align-medium-bar">
            <MediumSlideBar
              width={300}
              height={150}
              setDataLoaded={setDataLoaded}
            />
          </div>
          <div className="spacer" />
          <PageGrid
            posts={fakePosts}
            listData1={informationCategories}
            listData2={socialMediaCategories}
            images={[]}
          />
        </div>
      </div>
    </motion.div>
  );
}
