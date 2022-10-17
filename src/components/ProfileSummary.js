import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase/Config";
import logo from "../images/icons8-messages.svg";

function ProfileSummary(props) {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");

  function SignIn() {
    props.onCancel();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let account = { name, handle, id: uuidv4(), timestamp: serverTimestamp() };

    try {
      await setDoc(doc(db, "accounts", account.id), account);
    } catch (e) {
      console.log(e);
    }

    setName("");
    setHandle("");

    SignIn();
  };

  return (
    <div className="account">
      <form>
        <img src={logo} alt="logo" className="logo" />
        <input
          type="text"
          placeholder="username"
          className="one"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="post-handle"
          className="two"
          value={handle}
          onChange={(e) => {
            setHandle(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  );
}

export default ProfileSummary;
