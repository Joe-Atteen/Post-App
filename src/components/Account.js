import React from "react";
import { db } from "../Firebase/Config";
import { doc, deleteDoc } from "firebase/firestore";

function Account({ postDetails }) {
  const deleteAccount = async () => {
    try {
      await deleteDoc(doc(db, "accounts", postDetails.id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>{postDetails.name}</h2>
      <h3>{postDetails.handle}</h3>
      <button onClick={deleteAccount}>Delete Profile</button>
    </div>
  );
}

export default Account;
