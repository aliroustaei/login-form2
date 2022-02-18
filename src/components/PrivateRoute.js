import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
//Context
import { AuthContext } from "../context/AuthContextProvider";

const PrivateRoute = ({ component }) => {
  const { auth } = useContext(AuthContext);

  return <>{auth ? component : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
