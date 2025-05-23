"use client";
export default function Navbar({ setSection, section }) {
  return (
    <nav className="flex justify-center gap-6 py-4 bg-gray-100">
      {["Profile", "Academics", "Skills", "Extras"].map((tab) => (
        <button
          key={tab}
          className={`px-3 py-1 rounded ${section === tab ? "bg-blue-600 text-white" : "text-gray-700"}`}
          onClick={() => setSection(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
