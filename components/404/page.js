import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r bg-[#05AC8D]">
      <div className="text-center text-white px-6 py-12 animate-fadeIn">
        <h1 className="text-[10rem] md:text-[12rem] font-extrabold tracking-wide text-[#7E3F98] animate-slideIn">
          404
        </h1>
        <p className="text-3xl font-semibold text-[#7E3F98] animate-fadeInDelay">
          Page Not Found
        </p>
        <p className="font-semibold text-3xl ml-auto mt-4 animate-fadeInDelay">Accept our apologies!</p>
        <p className="text-lg pt-4 max-w-2xl mx-auto text-gray-300 animate-fadeInDelay">
          The page you were looking for doesn&apos;t exist. You may have mistyped the address or the page may have moved.
        </p>

        <div className="mt-8 animate-bounceIn">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-white text-[#7E3F98] font-semibold rounded-full text-lg transition-colors hover:bg-gray-200 hover:text-red-800 transform hover:scale-105 duration-300"
          >
            Go Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
