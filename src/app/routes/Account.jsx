import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import Login from "../../features/login/Login";

export default function Account() {
  const { currentUser } = useAuth();
  return <>{currentUser ? <div>Test</div> : <Login />}</>;
}
