import React, { useState } from "react";
import Logout from "./Logout";
import ProfileSummary from "./ProfileSummary";

function User() {
  const [registerIsOpen, setRegisterIsOpen] = useState(true);

  function openRegister() {
    setRegisterIsOpen(true);
  }

  function closeRegister() {
    setRegisterIsOpen(false);
  }

  return (
    <div className="register">
      <Logout openRegister={openRegister} />
      {registerIsOpen && <ProfileSummary onCancel={closeRegister} />}
    </div>
  );
}

export default User;
