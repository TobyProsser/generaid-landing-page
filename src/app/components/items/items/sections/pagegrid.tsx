import React from "react";
import Grid from "../items/grid";
import PostItem from "../items/postitem";
import TextList from "../sliding/textlist";
import { Post, skillCategory } from "../types";

interface PageGridProps {
  images: string[];
  posts: Post[];
  listData1: skillCategory[];
  listData2: skillCategory[];
}

const PageGrid: React.FC<PageGridProps> = ({ posts, listData1, listData2 }) => {
  return (
    <div className="page-grid">
      <div className="section">
        <h2 className="section-title title-centered">Information</h2>
        <h3 className="section-subtitle title-centered">
          Learn more about our mission!
        </h3>
        <div className="spacer" />
        <div style={{ marginLeft: "5%" }}>
          <TextList data={listData1} />
        </div>
      </div>

      <div className="section">
        <h2 className="section-title title-centered">Featured Post</h2>
        <h3 className="section-subtitle title-centered">
          A recent post made on Generaid
        </h3>
        <div className="spacer" />
        <div className="centered">
          <PostItem item={posts[0]} />
        </div>
      </div>

      <div className="section">
        <h2 className="section-title title-centered">Social Media</h2>
        <h3 className="section-subtitle title-centered">
          Your window into our world!
        </h3>
        <div className="spacer" />
        <div className="grid-align">
          <Grid />
        </div>
      </div>

      <div className="section">
        <h2 className="section-title title-centered">Our Links</h2>
        <h3 className="section-subtitle title-centered">
          Follow us on our socials!
        </h3>
        <div className="spacer" />
        <div className="centered" style={{ marginLeft: "10%" }}>
          <TextList data={listData2} />
        </div>
      </div>
      <div className="spacer" />
    </div>
  );
};

export default PageGrid;
