import React from "react";
import "../../../../styles/grid.css"; // Importing CSS styles

const defaultGradients = [
  "linear-gradient(to right, #ff7e5f, #feb47b)",
  "linear-gradient(to right, #6a11cb, #2575fc)",
  "linear-gradient(to right, #ff9966, #ff5e62)",
  "linear-gradient(to right, #56ab2f, #a8e063)",
  "linear-gradient(to right, #2b5876, #4e4376)",
  "linear-gradient(to right, #7f00ff, #e100ff)",
  "linear-gradient(to right, #ff4b1f, #1fddff)",
  "linear-gradient(to right, #00c6ff, #0072ff)",
  "linear-gradient(to right, #f46b45, #eea849)",
];

const Grid = ({ images = [] }) => {
  return (
    <div className="grid-container">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="grid-item"
          style={{
            background: images[index]
              ? `url(${images[index]}) center/cover`
              : defaultGradients[index],
          }}
        />
      ))}
    </div>
  );
};

export default Grid;
