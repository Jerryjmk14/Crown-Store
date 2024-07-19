import React from "react";
import Home from "./routes/home/Home";
import NavBar from "./routes/navigation/NavBar";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication";

export default function App() {
  const Shop = () => {
    return <h1>I am the shop page</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}
