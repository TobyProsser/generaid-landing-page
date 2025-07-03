"use client";

import { useRouter } from "next/navigation";
import * as Ionicons from "react-ionicons";
import tinycolor from "tinycolor2";
import { skillCategory } from "../../../constants/types";
import "../../../styles/textlistitem.css";
import DynamicIcon from "../dynamicicon";
declare module "react-ionicons";
interface TextListItemProps {
  data: skillCategory;
  loading: boolean;
}

const TextListItem: React.FC<TextListItemProps> = ({ data, loading }) => {
  const color = tinycolor(data.endColor).setAlpha(0.35).toRgbString();
  const router = useRouter();
  const handleClick = () => {
    router.push(data.relatedSkills);
  };

  return (
    <div className="list-item-container">
      <button className="category-button" onClick={handleClick}>
        <div className="textlist-row">
          <div
            className="textlist-icon-container"
            style={{
              background: loading
                ? `linear-gradient(to right, #c0c0c0, #c0c0c0)`
                : `linear-gradient(to right, ${data.startColor}, ${data.endColor})`,
              boxShadow: `0px 2px 6px ${color}`,
            }}
          >
            <div className="centered">
              <DynamicIcon
                size={60}
                iconName={data.icon as keyof typeof Ionicons}
              />
            </div>
          </div>

          <div className="textlist-text-container">
            <p className="textlist-title">{data.name}</p>
            <div style={{ maxWidth: 280 }}>
              <p className="textlist-description">{data.description}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default TextListItem;
