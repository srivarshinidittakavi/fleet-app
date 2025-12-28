import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContect } from "../context/AuthContect";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContect);

  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
