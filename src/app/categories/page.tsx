"use client"; // Required for state and effects
import { useEffect, useState } from "react";
import { fetchCategories } from "../../../utils/firestoreHelpers";
import RenderCategoryItem from "../components/items/items/items/mediumslideritem";
import Header from "../components/items/items/sections/header";
import { skillCategory } from "../components/items/items/types";
import Colors from "../constants/Colors";

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
          <p>Loading categories...</p>
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
