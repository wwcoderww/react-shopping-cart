import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

type LinksType = {
  to: string;
  msg: string;
};

function Links({ to, msg }: LinksType) {
  return (
    <Link to={to} className="">
      {msg}
    </Link>
  );
}

export default function NavBar() {
  return (
    <div className="flex py-1 pr-2 text-white bg-blue-600 ">
      <ul className="flex justify-evenly flex-1 text-5xl">
        <Links to={"./"} msg={"Home"} />
        <Links to={"./products"} msg={"Products"} />
        <Links to={"./checkout"} msg={"Checkout"} />
      </ul>
      <Link to={"./account"} className="flex items-center">
        <FaRegCircleUser className="text-4xl " />
      </Link>
    </div>
  );
}
