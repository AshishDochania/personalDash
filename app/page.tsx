"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Academics from "../components/Academics";
import Skills from "../components/Skills";
import Extras from "../components/Extras";

export default function Home() {
  const [section, setSection] = useState("Profile");

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar setSection={setSection} section={section} />
      <main className="w-full mx-auto px-4 md:px-8">
        {section === "Profile" && <Profile />}
        {section === "Academics" && <Academics />}
        {section === "Skills" && <Skills />}
        {section === "Extras" && <Extras />}
      </main>
    </div>
  );
}
