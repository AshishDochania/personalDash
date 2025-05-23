"use client";
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const timelineData = [
  {
    type: 'education',
    title: 'B.Tech Materials Engineering',
    institution: 'IIT Jodhpur',
    date: '2021 - 2025',
    description: 'CGPA: 6.53/10 | Coursework: Algorithms, Web Development',
    icon: <FaGraduationCap className="text-2xl"/>
  },
  {
    type: 'experience',
    title: 'Frontend Developer Intern',
    institution: 'MinaGlobe Innovations',
    date: 'July-2024 to 0ct-2024',
    description: 'Built scalable microservices architecture using Node.js and React',
    icon: <FaBriefcase className="text-2xl"/>
  }
];

export default function Academics() {
  return (
    <section className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Journey Through Time
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>
          
          {timelineData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className={`mb-8 flex ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-5/12 px-4 py-4">
                <div className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow ${idx % 2 === 0 ? 'text-right' : ''}`}>
                  <div className={`flex ${idx % 2 === 0 ? 'justify-end' : ''} mb-2`}>
                    <div className="p-2 bg-blue-100 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.institution}</p>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
