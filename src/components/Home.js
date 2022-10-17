import React, { useEffect } from "react";
import AllPosts from "./AllPosts";
import { useDispatch } from "react-redux";
import { AddNewPost } from "./Redux/Action";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase/Config";
import AllAccounts from "./AllAccounts";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const retrievePosts = async () => {
      const q = query(collection(db, "posts"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const postsArr = [];
        querySnapshot.forEach((doc) => {
          postsArr.push(doc.data());
        });
        dispatch(AddNewPost(postsArr));
        console.log(postsArr);
      });
    };
    retrievePosts();
  }, []);

  return (
    <div className="content home">
      <h1>Home</h1>
      <div className="profile-bar">
        <div className="profile-pic"></div>
        <div>
          <AllAccounts />
        </div>
      </div>
      <div className="horizontal-line"></div>
      <AllPosts />
    </div>
  );
}

export default Home;
