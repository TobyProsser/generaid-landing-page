"use client";

import React, { useEffect, useState } from "react";
import { LogoNodejs } from "react-ionicons";
import Colors from "../../../../../../constants/Colors";
import { fetchCategoryById } from "../../../../../../utils/firestoreHelpers";
import { skillCategory } from "../types";

type RenderCategoryItemProps = {
  item: string;
  width: number;
  height: number;
  loading: boolean;
};

const randomColors = [
  { start: Colors.pinkBlueStart, end: Colors.pinkBlueEnd },
  { start: Colors.yellowGreenStart, end: Colors.yellowGreenEnd },
  { start: Colors.orangePinkStart, end: Colors.orangePinkEnd },
];

const RenderCategoryItem: React.FC<RenderCategoryItemProps> = ({
  item,
  width,
  height,
  loading,
}) => {
  const [category, setCategory] = useState<skillCategory | null>(null);

  useEffect(() => {
    const getCategoryData = async () => {
      const fetchedCategory = await fetchCategoryById(item);
      setCategory(fetchedCategory);
    };

    getCategoryData();
  }, [item]);

  const randomPair =
    randomColors[Math.floor(Math.random() * randomColors.length)];
  const colors = category
    ? [category.startColor, category.endColor]
    : [randomPair.start, randomPair.end];
  const loadingColors = ["#e0e0e0", "#c0c0c0"];

  return (
    <button
      className="category-button"
      style={{
        width: `${width}px`,
        height: `${height}px`,

        background: loading
          ? `linear-gradient(to right, ${loadingColors[0]}, ${loadingColors[1]})`
          : `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
      }}
      onClick={() => {}}
    >
      <div className="gradient-overlay">
        {height >= 100 && (
          <div className="icon-container">
            <LogoNodejs name={category?.icon} size={60} color="white" />
          </div>
        )}
        <div className="text-container">
          {(() => {
            const maxLength = 13;
            const text = category?.name || "";

            let firstLine = "";
            let secondLine = "";
            const words = text.split(" ");

            for (const word of words) {
              if (
                (firstLine + (firstLine ? " " : "") + word).length <= maxLength
              ) {
                if (word !== "and" && word !== "or") {
                  firstLine += (firstLine ? " " : "") + word;
                }
              } else {
                secondLine += (secondLine ? " " : "") + word;
              }
            }

            return (
              <>
                <p className="button-text primary-text">{firstLine}</p>
                {secondLine && (
                  <p className="button-text secondary-text">{secondLine}</p>
                )}
              </>
            );
          })()}
        </div>
      </div>
    </button>
  );
};

export default RenderCategoryItem;
