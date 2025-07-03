import React from "react";
import tinycolor from "tinycolor2";
import Colors from "../../../constants/Colors";

type SmallTextButtonProps = {
  text: string;
  onClick?: () => void;
};

const SmallTextButton: React.FC<SmallTextButtonProps> = ({ text, onClick }) => {
  const color = tinycolor(Colors.darkBlueEnd).setAlpha(0.35).toRgbString();

  return (
    <button
      onClick={onClick}
      style={{
        background: `linear-gradient(135deg, ${Colors.darkBlueStart}, ${Colors.darkBlueEnd})`,
        padding: "6px 24px",
        marginBottom: "5px",
        borderRadius: "8px",
        boxShadow: `0px 2px 6px ${color}`,
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        border: "none",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default SmallTextButton;
