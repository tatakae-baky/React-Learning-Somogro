import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../utilities/firebase-login";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        toast("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };


  return (
    <div className="bg-base-100 max-w-screen-xl mx-auto h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        <button className="btn btn-primary" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>
        <button className="btn btn-primary">Sign in with Facebook</button>
        <button className="btn btn-primary">Sign in with Github</button>
      </div>
    </div>
  );
};

export default Login;
