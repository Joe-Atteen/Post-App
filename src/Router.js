import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import { FiMessageSquare } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline, IoHomeOutline } from "react-icons/io5";
import logo from "./images/icons8-messages.svg";

function Links(props) {
  function openForm() {
    props.onClick();
  }

  return (
    <Router>
      <div className="links">
        <img src={logo} alt="logo" className="logo" />
        <Link to="/" className="link">
          &nbsp;
          <IoHomeOutline className="icon" />
          Home
        </Link>
        <Link to="/notifications" className="link">
          <IoNotificationsOutline className="icon" />
          Notifications
        </Link>
        <Link to="/messages" className="link">
          <FiMessageSquare className="icon" />
          Messages
        </Link>
        <Link to="/profile" className="link">
          <CgProfile className="icon" />
          Profile
        </Link>
        <button className="tweet-button" onClick={openForm}>
          Post
        </button>
      </div>
      <Routes className="contents">
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/notifications" element={<Notifications />} />
        <Route exact={true} path="/messages" element={<Messages />} />
        <Route exact={true} path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default Links;
