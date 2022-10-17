import React, { useState } from "react";
import Links from "../Router";
import Backdrop from "./Backdrop";
import TweetInput from "./TweetInput";

function TweetModal() {
  const [formIsOpen, setFormIsOpen] = useState(false);

  function openForm() {
    setFormIsOpen(true);
  }

  function closeForm() {
    setFormIsOpen(false);
  }

  return (
    <div>
      <Links onClick={openForm} />
      {formIsOpen && <Backdrop />}
      {formIsOpen && <TweetInput onCancel={closeForm} />}
    </div>
  );
}

export default TweetModal;
