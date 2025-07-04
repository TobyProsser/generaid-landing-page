"use client";

import React, { useEffect, useState } from "react";
import Colors from "../../../constants/Colors";
import { skillCategory } from "../../../constants/types";
import "../../../styles/mediumslideritem.css";
import { fetchCategoryById } from "../../../utils/firestoreHelpers";
import DynamicIcon from "../dynamicicon";

import * as Ionicons from "react-ionicons";
import tinycolor from "tinycolor2";
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
  const shadowColor = tinycolor(colors[0]).setAlpha(0.15).toRgbString();

  console.log("shadow color ", shadowColor);
  return (
    <button
      className="category-button"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: loading
          ? `linear-gradient(to right, ${loadingColors[0]}, ${loadingColors[1]})`
          : `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
        boxShadow: `0px 2px 6px ${shadowColor}`,
        marginBottom: 20,
      }}
      onClick={() => {}}
    >
      <div className="gradient-overlay">
        <div className="icon-container">
          <DynamicIcon
            size={80}
            iconName={category?.icon as keyof typeof Ionicons}
          />
        </div>
        <div className="medium-item-text-container">
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
                  <p className="med-button-text secondary-text">{secondLine}</p>
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
