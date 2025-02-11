import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Volume2, 
  Mic, 
  BookOpen, 
  BarChart, 
  Star, 
  Activity 
} from 'lucide-react';

const OverviewScreen = () => {
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gray-900 poppins-bold mb-4">
          Welcome to Word Wave
        </h1>
        <p className="text-xl text-gray-600">
          Explore powerful tools to enhance your learning experience.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Text-to-Speech (TTS) Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-purple-600 mb-4">
            <Volume2 className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Text-to-Speech (TTS)
          </h2>
          <p className="text-gray-600 mb-6">
            Convert any text into natural-sounding audio. Perfect for listening
            to study materials on the go.
          </p>
          <Link to='/dashboard/tts'>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Try TTS
            </button>
          </Link>
        </motion.div>

        {/* Speech-to-Text (STT) Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-blue-600 mb-4">
            <Mic className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Speech-to-Text (STT)
          </h2>
          <p className="text-gray-600 mb-6">
            Transcribe your spoken words into text. Ideal for taking notes or
            dictating ideas.
          </p>
          <Link to='/dashboard/stt'>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Try STT
            </button>
          </Link>
        </motion.div>

        {/* Study with AI Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-green-600 mb-4">
            <BookOpen className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Study with AI
          </h2>
          <p className="text-gray-600 mb-6">
            Get personalized study recommendations and AI-powered explanations to
            ace your exams.
          </p>
          <Link to='/dashboard/room'> 
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Start Learning
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OverviewScreen;