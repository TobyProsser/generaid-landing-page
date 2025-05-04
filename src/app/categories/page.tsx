"use client";
import { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import { skillCategory } from "../../constants/types";
import { fetchCategories } from "../../utils/firestoreHelpers";
import RenderCategoryItem from "../components/items/mediumslideritem";
import Header from "../components/sections/header";

const randomColors = [
  { start: Colors.pinkBlueStart, end: Colors.pinkBlueEnd },
  { start: Colors.yellowGreenStart, end: Colors.yellowGreenEnd },
  { start: Colors.orangePinkStart, end: Colors.orangePinkEnd },
];

const CategoriesPage = () => {
  const [categories, setCategories] = useState<skillCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);

        // Check for cached data
        const cachedData = localStorage.getItem("categories");
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
      } catch (error) {
        console.error("Error loading categories:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="categories-page">
        <Header showLogo={true} />

        {loading ? (
          <p className="text-center">Loading categories...</p>
        ) : (
          <div className="categories-grid">
            {categories.map((category) => (
              <RenderCategoryItem
                key={category.id + 1232}
                item={category.id}
                width={300}
                height={150}
                loading={loading}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
