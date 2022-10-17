import React from "react";
import AllAccounts from "./AllAccounts";

function Profile() {
  return (
    <div className="content profile">
      <div className="pic"></div>
      <div className="name">
        <AllAccounts />
      </div>
    </div>
  );
}

export default Profile;
