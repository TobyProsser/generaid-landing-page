"use client";

import React from "react";
import "../../../../styles/postitem.css";
import { Post } from "../types";
import RenderCategoryItem from "./mediumslideritem";

interface PostItemProps {
  item?: Post;
  skeleton?: boolean;
}

const mockCategory = "1";

const PostItem: React.FC<PostItemProps> = ({ item, skeleton }) => {
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
                src={`/profile_pictures/${item?.id}/coverImage`}
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 10 }} />
      <div className="description-container">
        <p className="description-text">{item?.description || ""}</p>
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
