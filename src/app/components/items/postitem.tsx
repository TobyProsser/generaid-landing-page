"use client";

import React, { useEffect, useState } from "react";
import { Post } from "../../../constants/types";
import "../../../styles/postitem.css";
import RenderCategoryItem from "./mediumslideritem";

interface PostItemProps {
  item?: Post;
  skeleton?: boolean;
}

const mockCategory = "1";

const PostItem: React.FC<PostItemProps> = ({ item, skeleton }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!item) {
    return (
      <div className="post-container skeleton">
        <div className="gradient-placeholder"></div>
      </div>
    );
  }

  return !skeleton ? (
    <div className="post-container">
      <div className="content-row">
        <div className="medium-catergory-container">
          <RenderCategoryItem
            item={item.skillCategoryId}
            width={253}
            height={140}
            loading={false}
          />
        </div>

        <div className="info-container">
          <div className="price-box">
            <div className="price-gradient">
              <p className="price-text">${item?.price}</p>
            </div>
          </div>
          <div className="profile-container-align">
            <div className="profile-container">
              <img
                src={`/images/placeholder.jpg`} //`/profile_pictures/${item?.id}/coverImage`
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 10 }} />
      <div className="description-container">
        <p className="description-text">
          {item?.description
            ? isMobile
              ? item.description.slice(0, 100) + "..." // Limit on mobile
              : item.description
            : ""}
        </p>
      </div>
    </div>
  ) : (
    <div className="post-container skeleton">
      <div className="content-row">
        <RenderCategoryItem
          item={mockCategory}
          width={253}
          height={140}
          loading={true}
        />

        <div className="info-container">
          <div className="price-box skeleton-gradient"></div>
          <div className="profile-container skeleton-gradient"></div>
        </div>
      </div>
      <div className="description-container skeleton-gradient"></div>
    </div>
  );
};

export default PostItem;
