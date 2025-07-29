import React from "react";
import Login from "../../features/login/Login";
import { useAuth } from "../../contexts/AuthContext";

export default function Account() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return <>{currentUser ? <div>Test</div> : <Login />}</>;
}
