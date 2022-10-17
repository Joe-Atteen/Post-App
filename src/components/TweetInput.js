import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase/Config";

function TweetInput(props) {
  const [text, setText] = useState("");

  function closeModal() {
    props.onCancel();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let postText = { text, id: uuidv4(), timeStamp: serverTimestamp() };

    try {
      await setDoc(doc(db, "posts", postText.id), postText);
    } catch (e) {
      console.log(e);
    }

    setText("");
    closeModal();
  };

  return (
    <div>
      <form className="form">
        <div className="modal-close" onClick={closeModal}>
          X
        </div>
        <h1 className="view">Only Addo D can view this post</h1>
        <textarea
          name="tweet"
          id="tweet"
          cols="40"
          rows="3"
          placeholder="What's happening?"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <button onClick={handleSubmit} onCancel={closeModal}>
          Post
        </button>
      </form>
    </div>
  );
}

export default TweetInput;
