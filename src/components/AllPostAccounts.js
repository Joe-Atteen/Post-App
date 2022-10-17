import React from "react";
import { useSelector } from "react-redux";
import PostAccount from "./PostAccount";

function AllPostAccounts() {
  const { profiles } = useSelector((store) => store);

  return (
    <div>
      {profiles.map((profile, index) => {
        return <PostAccount key={index} postDetails={profile} />;
      })}
    </div>
  );
}

export default AllPostAccounts;
