import React from "react";
import FindUsOn from "./FindUsOn";
import { useLocation } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import QZone from "./QZone";

const RightSide = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const showLoginSignup = pathname.startsWith("/news");

  return (
    <div>
      {showLoginSignup && <SocialLogin></SocialLogin>}
      <FindUsOn></FindUsOn>
      <QZone></QZone>
    </div>
  );
};

export default RightSide;
