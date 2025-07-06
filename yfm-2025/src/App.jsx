import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mancing from "./components/Mancing";
import Makrab from "./components/Makrab";
import Contacts from "./components/Contacts"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
    <Analytics/>
    <Navbar/>
      <main className="antialiased overflow-x-hidden overflow-y-hidden mx-auto relative z-10">
    <Navbar/>
    <Hero/>
    <About/>
    <Mancing/>
    <Makrab/>
    <Contacts/>
      </main>
    </>
  );
}

export default App;
