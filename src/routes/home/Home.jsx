import React from "react";
import Products from "../../components/products/Products";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Outlet />
      <Products />
    </div>
  );
}
