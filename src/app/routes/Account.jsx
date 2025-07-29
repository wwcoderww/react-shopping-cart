import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import Login from "../../features/login/Login";
import AccountSettings from "../../features/accountSettings/AccountSettings";

export default function Account() {
  const { currentUser } = useAuth();
  return <>{currentUser ? <AccountSettings /> : <Login />}</>;
}
