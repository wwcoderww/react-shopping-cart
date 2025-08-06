import { useNavigate } from "react-router-dom";

export default function (path: string) {
  const navigate = useNavigate();
  return navigate(path);
}
