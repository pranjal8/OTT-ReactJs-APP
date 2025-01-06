import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        //user sign in
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //user signned out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // navigate('/error')
      });
  };

  return (
    <div className="flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-36" src={logo} alt="logo" />
      {user && (
        <div className="p-2">
          <img className=" w-12 h-12" src={user?.photoURL} alt="userIcon" />
          <button onClick={handleSignOut} className=" font-bold text-white ">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
