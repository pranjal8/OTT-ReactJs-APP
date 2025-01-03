import React, { useState } from "react";
import Header from "./Header";
import background from "../assets/background.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={background} alt="background"  />
      </div>
      <form className="text-white p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold  text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign In Now"
            : "Already registered? Sign Up now"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
