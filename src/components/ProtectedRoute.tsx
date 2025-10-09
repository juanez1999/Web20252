import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const authUser = useSelector((state: RootState) => state.auth.user);

  if (!authUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
