'use client';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const roles = [
  'Web Developer',
  'UI/UX Enthusiast',
  'Open Source Contributor',
  'Lifelong Learner',
  'Frontend Developer',
];

export default function Profile() {
  // Typing animation for roles
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typing) {
      if (displayedRole.length < roles[roleIdx].length) {
        const timeout = setTimeout(() => {
          setDisplayedRole(roles[roleIdx].slice(0, displayedRole.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setTyping(false);
        setTimeout(() => setTyping(true), 1200);
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayedRole('');
        setRoleIdx((prev) => (prev + 1) % roles.length);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [displayedRole, typing, roleIdx]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* Glassmorphism Card */}
      <div className="backdrop-blur-lg bg-white/60 shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-lg mx-4 flex flex-col items-center border border-white/30">
        {/* Animated Profile Image */}
        <div className="relative group mb-6">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-2 right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
            Online
          </span>
        </div>
        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-1 tracking-tight">
          Ashish Dochania
        </h1>
        {/* Typing Role */}
        <div className="h-7 mb-2">
          <span className="text-lg md:text-xl font-semibold text-blue-600">
            {displayedRole}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        {/* Bio */}
        <p className="text-gray-700 text-center mb-6 px-2">
          Passionate about building delightful digital experiences. Always
          learning, always growing.
        </p>
        {/* Social Links */}
        <div className="flex gap-5 mb-4">
          <a
            href="mailto:dochania.1@iitj.ac.in"
            aria-label="Email"
            className="text-blue-600 hover:text-blue-800 transition-colors text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/AshishDochania"
            aria-label="GitHub"
            className="text-gray-800 hover:text-black transition-colors text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-dochania-a0426422b/"
            aria-label="LinkedIn"
            className="text-blue-700 hover:text-blue-900 transition-colors text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        {/* Quick Stats */}
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl text-blue-700">2+</span>
            <span className="text-xs text-gray-500">Years Exp.</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl text-purple-700">10+</span>
            <span className="text-xs text-gray-500">Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl text-pink-700">5</span>
            <span className="text-xs text-gray-500">Certs</span>
          </div>
        </div>
      </div>
      {/* Subtle floating blobs for background */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}
