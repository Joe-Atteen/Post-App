import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

function AllPosts() {
  const { posts } = useSelector((store) => store);

  return (
    <div>
      {posts.map((post, index) => {
        return <Post key={index} postDetails={post} />;
      })}
    </div>
  );
}

export default AllPosts;
