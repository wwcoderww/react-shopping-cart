import { useAuth } from "../../contexts/AuthContext";
import AccountSettings from "../../features/accountSettings/AccountSettings";
import Login from "../../features/login/Login";

export default function Account() {
  const { currentUser } = useAuth();

  return <>{currentUser ? <AccountSettings /> : <Login />}</>;
}
