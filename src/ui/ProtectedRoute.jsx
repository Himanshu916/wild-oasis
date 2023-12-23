import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //   loading user
  const { user, isLoading } = useUser();
  const isAuthenticated = user?.role === "authenticated";

  //   if not authenticated redirect to login page
  useEffect(function () {
    if (!isAuthenticated && !isLoading) navigate("/login");
  });

  //   while loading user show loader
  if (isLoading) return <p>Loading ...</p>;

  //   if there is user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
