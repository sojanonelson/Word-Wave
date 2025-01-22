import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home'; // Home screen component
import Login from '../Pages/Login'; // Login screen component
import TextToSpeechPage from '../Pages/TextToSpeech'; // Text-to-speech component
import SpeechToTextPage from '../Pages/SpeechToText'; // Speech-to-text component
import ProtectedRoute from '../utils/ProtectiveRoute'; // Component to protect routes
import NotFoundPage from '../Pages/NotFoundPage';
import Register from '../Pages/Register';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Register />} />

        {/* Protected Routes */}
        {/* <Route path="/text-to-speech" element={<ProtectedRoute><TextToSpeechPage /></ProtectedRoute>} />
        <Route path="/speech-to-text" element={<ProtectedRoute><SpeechToTextPage /></ProtectedRoute>} /> */}
                <Route path="/text-to-speech" element={<TextToSpeechPage />} />
                <Route path="/speech-to-text" element={<ProtectedRoute><SpeechToTextPage /></ProtectedRoute>} />

        {/* Fallback Route (using Navigate for redirect) */}
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
