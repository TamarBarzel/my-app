'use client'
import React, { useState } from 'react';

const ContactPage:React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);

  const showPopup = ():void => {
    setPopupOpen(true);
  };

  const closePopup = ():void => {
    setPopupOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg text-center p-6 w-80">
        <img
          src="https://i.pravatar.cc/300"
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <div className="text-2xl font-bold text-gray-800">אדם כהן</div>
        <div className="text-gray-600 mb-4">מפתח אתרים ומעצב UX/UI</div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={showPopup}
        >
          Contact
        </button>
      </div>

      {isPopupOpen && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" onClick={closePopup}></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 text-center">
            <h2 className="text-xl font-semibold">אדם כהן</h2>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={closePopup}
            >
              סגור
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactPage;
