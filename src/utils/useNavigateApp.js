import { useNavigate } from "react-router-dom";

export default function (path) {
  const navigate = useNavigate();
  return navigate(path);
}
