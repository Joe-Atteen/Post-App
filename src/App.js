import TweetModal from "./components/TweetModal";
import User from "./components/User";
import { useDispatch } from "react-redux";
import { AddNewProfile } from "./components/Redux/Action";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./Firebase/Config";
import { useEffect } from "react";
import RightSideBar from "./RightSideBar";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    const retrieveAccount = async () => {
      const q = query(collection(db, "accounts"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const accountsArr = [];
        querySnapshot.forEach((doc) => {
          accountsArr.push(doc.data());
        });
        dispatch(AddNewProfile(accountsArr));
        console.log(accountsArr);
      });
    };
    retrieveAccount();
  }, []);

  return (
    <div className="App">
      <TweetModal />
      <User />
      <RightSideBar />
    </div>
  );
}

export default App;
