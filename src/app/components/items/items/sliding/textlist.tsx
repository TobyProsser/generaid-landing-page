"use client";

import { useEffect } from "react";
import "../../../../styles/textlist.css";
import TextListItem from "../items/textlistitem";
import { skillCategory } from "../types";

type TextListProps = {
  data: skillCategory[] | null;
  loading?: boolean | null;
};

const TextList = ({ data, loading }: TextListProps) => {
  useEffect(() => {}, [data]);

  const renderPlaceholder = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="placeholder-container">
        <button className="placeholder-button">
          <div className="row">
            {/* Placeholder for Icon */}
            <div className="icon-placeholder"></div>

            {/* Placeholder for Text */}
            <div className="text-placeholder">
              <div className="title-placeholder"></div>
              <div className="description-placeholder"></div>
            </div>
          </div>
        </button>
      </div>
    ));
  };

  return !loading ? (
    <ul className="list-container">
      {data!.map((item) => (
        <li key={item.id || Math.random().toString()}>
          <TextListItem data={item} loading={loading!} />
        </li>
      ))}
    </ul>
  ) : (
    <div className="placeholder-list">{renderPlaceholder()}</div>
  );
};

export default TextList;
