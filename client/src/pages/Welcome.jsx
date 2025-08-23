import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  // Toast for features under development
  const underDevelopment = () => {
    toast.error(
      <span>
        This feature is under development.<br />
        Please check back later.
      </span>,
      {
        style: {
          background: '#36454F', // charcoal gray (a "gray that isn’t gray")
          color: '#F0F0F0',      // light text
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          border: '1px solid #B6AFA9', // greige border
          borderRadius: '8px',
          padding: '12px 20px',
        },
      }
    );
  };

  // Navigation functions
  const gotoLogin = () => navigate('/login');
  const gotoRegister = () => navigate('/register');

  return (
    <>
      {/* Toast container */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="flex h-screen">
        {/* Left Welcome Panel */}
        <div className="bg-cyan-500 flex items-center justify-center w-[40%] relative">
          <h1 className="text-5xl font-bold">Welcome</h1>
          <p className="fixed bottom-4 left-4 text-white">
            This is a fixed message
          </p>
        </div>

        {/* Middle Email Login/Register Panel */}
        <div className="bg-yellow-400 flex flex-col items-center justify-center relative overflow-hidden group p-6 w-[30%]">
          <h1 className="text-2xl font-bold text-center transition-all duration-700 ease-in group-hover:-translate-y-10">
            Login/Register Using Email
          </h1>
          <div className="flex flex-row gap-4 mt-4">
            <button
              className="btn btn-outline btn-accent p-5 opacity-0 pointer-events-none
                         transition-all duration-700 ease-in
                         group-hover:opacity-100 group-hover:pointer-events-auto"
              onClick={gotoLogin}
            >
              Login
            </button>
            <button
              className="btn btn-outline btn-accent p-5 opacity-0 pointer-events-none
                         transition-all duration-700 ease-in
                         group-hover:opacity-100 group-hover:pointer-events-auto"
              onClick={gotoRegister}
            >
              Register
            </button>
          </div>
        </div>

        {/* Right Google Login/Register Panel */}
        <div className="bg-green-400 flex flex-col items-center justify-center relative overflow-hidden group p-6 w-[30%]">
          <h1 className="text-2xl font-bold text-center transition-all duration-700 ease-in group-hover:-translate-y-10">
            Login/Register Using Google
          </h1>
          <div className="flex flex-row gap-4 mt-4">
            <button
              className="btn btn-outline btn-accent p-5 opacity-0 pointer-events-none
                         transition-all duration-700 ease-in
                         group-hover:opacity-100 group-hover:pointer-events-auto"
              onClick={underDevelopment}
            >
              Login
            </button>
            <button
              className="btn btn-outline btn-accent p-5 opacity-0 pointer-events-none
                         transition-all duration-700 ease-in
                         group-hover:opacity-100 group-hover:pointer-events-auto"
              onClick={underDevelopment}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
