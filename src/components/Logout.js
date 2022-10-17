import React from "react";

function Logout(props) {
  function openForm() {
    props.openRegister();
  }

  return (
    <div className="logout">
      <button onClick={openForm}>Logout</button>
    </div>
  );
}

export default Logout;
