import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import UnderDevelopment from '../ToasterHelpers/UnderDevelopment';

import LightRays from '../react-bits/LightRays';
import SplitText from '../react-bits/SplitText';


import About from '../components/About';

const Welcome = () => {
  const navigate = useNavigate();

  const gotoLogin = () => navigate('/login');

  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    if (animationCompleted) {
      console.log('Animation completed state changed to true');
    }
  }, [animationCompleted]);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
    setAnimationCompleted(true);
  };

  return (
    <>
    <About/>
      <div className="flex">
        <div className="relative w-full h-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
          <div className="fixed inset-0 flex flex-col items-center justify-center text-center">
            <SplitText
              text="Welcome to Expense Tracker"
              className="text-3xl font-bold text-center w-full text-cyan-400"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className={`transition-all duration-700 ease-out transform ${
              animationCompleted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
              <div
                className="my-6 text-lg font-medium text-cyan-400">
                The only application you need to manage your expenses
              </div>
              <div className='items-center justify-center'>
                <h1></h1>
                <button className="btn bg-white text-black border-[#e5e5e5] cursor-target mx-3" onClick={gotoLogin}>
                  <svg aria-label="Email icon" width="16" height="16" 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">
                      </path>
                    </g>
                  </svg>
                  Login with Email
                </button>
                <button className="btn bg-white text-black border-[#e5e5e5] cursor-target mx-3" onClick={UnderDevelopment}>
                  <svg aria-label="Google logo" width="16" height="16" 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff">
                          </path>
                          <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                          <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                          <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                          <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                      </g>
                  </svg>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
