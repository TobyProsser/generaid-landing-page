import React from "react";

interface ImagePairProps {
  portraitSrc: string;
  landscapeSrc: string;
  altText?: string;
}

const ImagePair: React.FC<ImagePairProps> = ({
  portraitSrc,
  landscapeSrc,
  altText,
}) => {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <img
        src={portraitSrc}
        alt={altText || "Portrait Version"}
        style={{
          width: "23%",
          height: "600px",
          objectFit: "scale-down",
          borderRadius: "8px",
        }}
      />
      <img
        src={landscapeSrc}
        alt={altText || "Landscape Version"}
        style={{
          width: "80%",
          height: "600px",
          objectFit: "scale-down",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default ImagePair;
