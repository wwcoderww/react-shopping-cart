import React from "react";
import { Link } from "react-router-dom";

function Links({ to, msg }) {
  return (
    <Link to={to} className="p-4">
      {msg}
    </Link>
  );
}

export default function NavBar() {
  return (
    <ul className="flex justify-evenly">
      <Links to={"./home"} msg={"Welcome"} />
      <Links to={"./products"} msg={"Products"} />
      <Links to={"./checkout"} msg={"Checkout"} />
      <Links to={"./login"} msg={"Login"} />
    </ul>
  );
}
