import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul>
      <Link to={"./home"}>Welcome</Link>
      <Link to={"./products"}>Products</Link>
      <Link to={"./checkout"}>Checkout</Link>
      <Link to={"./login"}>Login</Link>
    </ul>
  );
}
