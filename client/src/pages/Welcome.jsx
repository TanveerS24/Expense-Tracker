import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import UnderDevelopment from '../ToasterHelpers/UnderDevelopment';

const Welcome = () => {
  const navigate = useNavigate();

  // Navigation functions
  const gotoLogin = () => navigate('/login');
  const gotoRegister = () => navigate('/register');

  return (
    <>
      <div className="flex h-screen">
        <div className="bg-cyan-500 flex items-center justify-left underline w-[40%] relative">
          <h1 className="text-5xl font-bold">Welcome</h1>
        </div>

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

        <div className="bg-green-400 flex flex-col items-center justify-center relative overflow-hidden group p-6 w-[30%]">
          <h1 className="text-2xl font-bold text-center transition-all duration-700 ease-in group-hover:-translate-y-10">
            Login/Register Using Google
          </h1>
          <div className="flex flex-row gap-4 mt-4">
            <button
              className="btn btn-outline btn-accent p-5 opacity-0 pointer-events-none
                         transition-all duration-700 ease-in
                         group-hover:opacity-100 group-hover:pointer-events-auto"
              onClick={UnderDevelopment}
            >
              Login
            </button>
            <button
              className="btn btn-outline btn-accent p-5 opacity-0 pointer-events-none
                         transition-all duration-700 ease-in
                         group-hover:opacity-100 group-hover:pointer-events-auto"
              onClick={UnderDevelopment}
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
