import React from "react";
import { NavBar } from "./components/NavBar";
import { Controller } from "./components/Controller";
import { AlgoDisplay } from "./components/AlgoDisplay";


export default function App() {
  return (
    <>
      <NavBar />
      <Controller />
      <AlgoDisplay  />      
    </>
  );
}
