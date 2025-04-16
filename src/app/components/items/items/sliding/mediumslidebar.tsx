"use client";

import { useEffect, useState } from "react";
import Colors from "../../../../../../constants/Colors";
import { fetchCategories } from "../../../../../../utils/firestoreHelpers";
import RenderCategoryItem from "../items/mediumslideritem";
import { skillCategory } from "../types";
// Required for Next.js Client Component
import "../../../../styles/mediumslidebar.css";
type MediumSlideBarProps = {
  width: number;
  height: number;
};

const randomColors = [
  { start: Colors.pinkBlueStart, end: Colors.pinkBlueEnd },
  { start: Colors.yellowGreenStart, end: Colors.yellowGreenEnd },
  { start: Colors.orangePinkStart, end: Colors.orangePinkEnd },
];

const MediumSlideBar = ({ width, height }: MediumSlideBarProps) => {
  const [categories, setCategories] = useState<skillCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);

        // Check for cached data
        const cachedData = localStorage.getItem("categories"); // Use localStorage instead of AsyncStorage
        if (cachedData) {
          setCategories(JSON.parse(cachedData));
          console.log("Loaded categories from cache.");
        }

        // Fetch fresh data from Firestore
        const fetchedCategories = await fetchCategories();
        const updatedCategories = fetchedCategories.map((category) => {
          if (!category.startColor || !category.endColor) {
            const randomPair =
              randomColors[Math.floor(Math.random() * randomColors.length)];
            category.startColor = randomPair.start;
            category.endColor = randomPair.end;
          }
          return category;
        });

        // Update state and cache
        setCategories(updatedCategories);
        localStorage.setItem("categories", JSON.stringify(updatedCategories));
        console.log("Updated categories in cache.");
        setLoading(false);
      } catch (error) {
        console.error("Error loading categories:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {!loading
          ? categories.slice(0, 4).map(
              (
                item // Only load first 3 items
              ) => (
                <RenderCategoryItem
                  key={item.id}
                  item={item.id}
                  width={width}
                  height={height}
                  loading={loading}
                />
              )
            )
          : [...Array(3)].map((_, index) => (
              <RenderCategoryItem
                key={index}
                width={width}
                height={height}
                loading={true}
                item=""
              />
            ))}
      </div>
    </div>
  );
};

export default MediumSlideBar;
