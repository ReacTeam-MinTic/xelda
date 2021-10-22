import { useUser } from "context/userContext";
import React from "react";

const PrivateRoute = ({ rolesList, children }) => {
  const { userData } = useUser();
  if (rolesList.includes(userData.role)) {
    return children;
  }
  return (
    <div>
      <h1>No estas autorizado por favor esperaaaaaa.......................</h1>
    </div>
  );
};

export default PrivateRoute;
