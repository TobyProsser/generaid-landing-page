"use client";

import { useRouter } from "next/navigation";
import * as Ionicons from "react-ionicons";
import "../../../../styles/textlistitem.css";
import DynamicIcon from "../dynamicicon";
import { skillCategory } from "../types";
declare module "react-ionicons";
interface TextListItemProps {
  data: skillCategory;
  loading: boolean;
}

const TextListItem: React.FC<TextListItemProps> = ({ data, loading }) => {
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
            }}
          >
            <DynamicIcon
              size={40}
              iconName={data.icon as keyof typeof Ionicons}
            />
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
