"use client";
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';

const skillsData = [
  { 
    category: 'Frontend', 
    icon: <FaReact className="text-4xl text-blue-500"/>, 
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 }
    ]
  },
  {
    category: 'Backend',
    icon: <FaNodeJs className="text-4xl text-green-500"/>,
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'Postman', level: 75 }
    ]
  }
];

export default function Skills() {
  return (
    <section className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white rounded-lg shadow">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




const skills = ["JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Git","Postman","HTML","C++","Bootstrap"];