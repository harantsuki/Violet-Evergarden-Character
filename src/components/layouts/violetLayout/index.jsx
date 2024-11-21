import React from "react";
import { Navigate } from "react-router-dom";

const VioletLayout = ({ children }) => {
  const isToken = () => {
    return !!localStorage.getItem("authToken");
  };

  return <>{isToken() ? children : <Navigate to="/login" />}</>;
};

export default VioletLayout;
