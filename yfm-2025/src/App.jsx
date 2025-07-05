import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mancing from "./components/Mancing";

function App() {
  return (
    <>
    <Navbar/>
      <main className="antialiased overflow-x-hidden overflow-y-hidden mx-auto relative z-10">
    <Navbar/>
    <Hero/>
    <About/>
    <Mancing/>
      </main>
    </>
  );
}

export default App;
