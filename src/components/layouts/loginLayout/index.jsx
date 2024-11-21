import React from "react";
import { Navigate } from "react-router-dom";

const LoginLayout = ({ children }) => {
  const isToken = () => {
    return !!localStorage.getItem("authToken");
  };

  return <>{isToken() ? <Navigate to="/violet" /> : children}</>;
};

export default LoginLayout;
