import React from "react";
import Colors from "../../../../../../constants/Colors";

type SmallTextButtonProps = {
  text: string;
};

const SmallTextButton: React.FC<SmallTextButtonProps> = ({ text }) => {
  return (
    <button
      onClick={() => {}}
      style={{
        background: `linear-gradient(135deg, ${Colors.darkBlueStart}, ${Colors.darkBlueEnd})`,
        padding: "6px 24px",
        borderRadius: "8px",
        boxShadow: `0px 4px 10px var(--darkBlueEnd)`,
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
