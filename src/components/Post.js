import React, { useState } from "react";
import ReactTimeAgo from "react-time-ago";
import AllPostAccounts from "./AllPostAccounts";
import EditPost from "./EditPost";
import { db } from "../Firebase/Config";
import { doc, deleteDoc } from "firebase/firestore";

function Post({ postDetails }) {
  const [formIsOpen, setFormIsOpen] = useState(false);

  function openForm() {
    setFormIsOpen(true);
  }

  function closeForm() {
    setFormIsOpen(false);
  }

  const deletePost = async () => {
    try {
      await deleteDoc(doc(db, "posts", postDetails.id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post">
      <AllPostAccounts />
      <div className="time">
        🕐
        <ReactTimeAgo date={new Date()} timeStyle="twitter-minute" />
      </div>
      <p>{postDetails.text}</p>
      <div className="emojis">
        <div>👍</div>
        <div>😅</div>
        <div>😡</div>
        <div>😍</div>
        <div onClick={openForm}>📝</div>
        <div onClick={deletePost}>❌</div>
      </div>
      {formIsOpen && (
        <EditPost postDetails={postDetails} onCancel={closeForm} />
      )}
    </div>
  );
}

export default Post;
