import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const ProtectedRoute = ({ element: Element }) => {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return Element;
};

export default ProtectedRoute;
