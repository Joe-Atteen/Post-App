import React from "react";

function PostAccount({ postDetails }) {
  return (
    <div className="postaccount">
      <p>
        <span>{postDetails.name}</span>&nbsp;
        {postDetails.handle}
      </p>
    </div>
  );
}

export default PostAccount;
