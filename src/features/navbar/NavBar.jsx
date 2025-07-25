import React from "react";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

function Links({ to, msg }) {
  return (
    <Link to={to} className="">
      {msg}
    </Link>
  );
}

export default function NavBar() {
  return (
    <div className="flex py-1 pr-2  text-white">
      <ul className="flex justify-evenly flex-1 text-5xl">
        <Links to={"./home"} msg={"Home"} />
        <Links to={"./products"} msg={"Products"} />
        <Links to={"./checkout"} msg={"Checkout"} />
      </ul>
      <Link to={"./login"} className="flex items-center">
        <FaRegCircleUser className="text-4xl " />
      </Link>
    </div>
  );
}
