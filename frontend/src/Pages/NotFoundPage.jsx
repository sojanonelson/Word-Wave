import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg  w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-800">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">It seems like the page you're looking for doesn't exist.</p>
        <p className="text-2xl font-bold text-blue-500 mt-6">Word Wave</p>
        <Link
          to="/"
          className="mt-6 inline-block text-lg text-blue-600 hover:text-blue-800 font-semibold"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
