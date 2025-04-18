"use client";

import { skillCategory } from "../types";

import { LogoIonic } from "react-ionicons";
import Colors from "../../../../../../constants/Colors";
import "../../../../styles/textlistitem.css";

interface TextListItemProps {
  data: skillCategory;
  loading: boolean;
}

const TextListItem: React.FC<TextListItemProps> = ({ data, loading }) => {
  const handleClick = () => {};

  return (
    <div className="list-item-container">
      <button className="category-button" onClick={handleClick}>
        <div className="textlist-row">
          <div
            className="textlist-icon-container"
            style={{
              background: loading
                ? `linear-gradient(to right, #c0c0c0, #c0c0c0)`
                : `linear-gradient(to right, ${Colors.pinkBlueStart}, ${Colors.pinkBlueEnd})`,
            }}
          >
            <LogoIonic size={40} color="white" />
          </div>

          <div className="textlist-text-container">
            <p className="title">{data.name}</p>
            <p className="description">{data.description}</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default TextListItem;
