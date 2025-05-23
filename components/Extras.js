"use client";
import { motion } from 'framer-motion';
import { FaTrophy, FaBook, FaCertificate, FaPalette } from 'react-icons/fa';

const extrasData = {
  goals: [
    { 
      title: 'Become Full Stack Architect',
      icon: <FaTrophy className="text-3xl text-yellow-500"/>,
      timeline: '2026 Target'
    }
  ],
  hobbies: [
    {
      title: 'Photography',
      icon: <FaPalette className="text-3xl text-purple-500"/>,
      description: 'Capturing moments in nature & urban landscapes, also dancing,singing,sketching and playing basketball are some of my hobbies.'
    }
  ],
  certifications: [
    {
      title: 'Certified Web Developer',
      icon: <FaCertificate className="text-3xl text-blue-500"/>,
      issuer: 'Udemy Cource certification',
      year: '2024'
    }
  ]
};

export default function Extras() {
  return (
    <section className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
          Beyond the Code
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Goals Card */}
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-yellow-100 rounded-full">
                {extrasData.goals[0].icon}
              </div>
              <h3 className="text-xl font-bold">Career Goals</h3>
            </div>
            <p className="text-lg font-semibold mb-2">{extrasData.goals[0].title}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="px-2 py-1 bg-yellow-100 rounded-full">
                🎯 {extrasData.goals[0].timeline}
              </span>
            </div>
          </motion.div>

          {/* Hobbies Card */}
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                {extrasData.hobbies[0].icon}
              </div>
              <h3 className="text-xl font-bold">Creative Pursuits</h3>
            </div>
            <p className="text-gray-700 mb-2">{extrasData.hobbies[0].description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-100 rounded-full text-sm">Photography</span>
              <span className="px-2 py-1 bg-purple-100 rounded-full text-sm">Basketball</span>
              <span className="px-2 py-1 bg-purple-100 rounded-full text-sm">Sketching</span>
              <span className="px-2 py-1 bg-purple-100 rounded-full text-sm">Dancing</span>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                {extrasData.certifications[0].icon}
              </div>
              <h3 className="text-xl font-bold">Accreditations</h3>
            </div>
            <div className="space-y-2">
              <p className="font-medium">{extrasData.certifications[0].title}</p>
              <p className="text-sm text-gray-600">{extrasData.certifications[0].issuer}</p>
              <span className="px-2 py-1 bg-blue-100 rounded-full text-sm">
                🏅 {extrasData.certifications[0].year}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
