"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fetchCategories } from "../../../../../../utils/firestoreHelpers";
import Colors from "../../../../constants/Colors";
import "../../../../styles/mediumslidebar.css";
import RenderCategoryItem from "../items/mediumslideritem";
import { skillCategory } from "../types";

type MediumSlideBarProps = {
  width: number;
  height: number;
  setDataLoaded?: (value: boolean) => void;
};

const randomColors = [
  { start: Colors.pinkBlueStart, end: Colors.pinkBlueEnd },
  { start: Colors.yellowGreenStart, end: Colors.yellowGreenEnd },
  { start: Colors.orangePinkStart, end: Colors.orangePinkEnd },
];

const MediumSlideBar = ({
  width,
  height,
  setDataLoaded,
}: MediumSlideBarProps) => {
  const [categories, setCategories] = useState<skillCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [enteredCount, setEnteredCount] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
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

        setCategories(updatedCategories);
        setLoading(false);
        setDataLoaded?.(true);
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };

    loadCategories();
  }, []);

  useEffect(() => {
    if (isInView) {
      setEnteredCount((prev) => prev + 1);
    }
  }, [isInView]);

  return (
    <div className="med-wrapper">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: enteredCount === 1 ? 100 : 50,
          damping: enteredCount === 1 ? 8 : 6,
        }}
        whileInView={enteredCount > 1 ? { x: [-10, 10] } : {}}
        className="scroll-container"
      >
        <div className="scroll-content scrolling-parent-container">
          {!loading
            ? categories
                .slice(0, 4)
                .map((item) => (
                  <RenderCategoryItem
                    key={item.id}
                    item={item.id}
                    width={width}
                    height={height}
                    loading={loading}
                  />
                ))
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
      </motion.div>
    </div>
  );
};

export default MediumSlideBar;
