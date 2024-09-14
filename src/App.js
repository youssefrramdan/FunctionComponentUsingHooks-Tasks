import "./App.css";
import React, { useState } from "react";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import Products from "./Component/Products/Products";
import Component1 from "./Component/UseContext/Component1/Component1";
import SideEffect from "./Component/UseAffect/SideEffect";
import UserNameChangeMessage from "./Component/UserNameChangeMessage/UserNameChangeMessage";
import Counterinterval from "./Component/Counterinterval/Counterinterval";
import MousePositionAndClicks from "./Component/MousePositionAndClicks/MousePositionAndClicks";
import WindowResize from "./Component/WindowResize/WindowResize";
import HttpReqGetAllComents from "./Component/HttpReqGetAllComents/HttpReqGetAllComents";
import HttpReqSearchByPostId from "./Component/HttpReqSearchByPostId/HttpReqSearchByPostId";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  // Toggle between login and signup
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <Login switchToSignUp={toggleForm} />
      ) : (
        <SignUp switchToLogin={toggleForm} />
      )}
      {/* <Products></Products> */}
      {/* <Component1></Component1> */}
      {/* <SideEffect></SideEffect> */}
      {/* <UserNameChangeMessage></UserNameChangeMessage> */}
      {/* <Counterinterval></Counterinterval> */}
      {/* <MousePositionAndClicks></MousePositionAndClicks> */}
      {/* <WindowResize></WindowResize> */}
      {/* <HttpReqGetAllComents></HttpReqGetAllComents> */}
      {/* <HttpReqSearchByPostId></HttpReqSearchByPostId> */}
    </div>
  );
}

export default App;
