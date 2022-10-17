import React from "react";
import { useSelector } from "react-redux";
import Account from "./Account";

function AllAccounts() {
  const { profiles } = useSelector((store) => store);

  return (
    <div>
      {profiles.map((profile, index) => {
        return <Account key={index} postDetails={profile} />;
      })}
    </div>
  );
}

export default AllAccounts;
