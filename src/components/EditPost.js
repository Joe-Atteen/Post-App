import React, { useState } from "react";
import { db } from "../Firebase/Config";
import { doc, updateDoc } from "firebase/firestore";

function EditPost(props) {
  const [text, setText] = useState(props.postDetails.text);
  const [id, setId] = useState(props.postDetails.id);

  function closeModal() {
    props.onCancel();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let postDetails = { text, id };

    try {
      const docRef = doc(db, "posts", postDetails.id);
      await updateDoc(docRef, postDetails);
    } catch (error) {
      console.log(error);
    }

    setText("");
    setId("");

    closeModal();
  };

  return (
    <div className="edit">
      <form className="form editform">
        <div className="modal-close" onClick={closeModal}>
          X
        </div>
        <h2>Edit Post</h2>
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
        <button onClick={handleSubmit}>Post</button>
      </form>
    </div>
  );
}

export default EditPost;
