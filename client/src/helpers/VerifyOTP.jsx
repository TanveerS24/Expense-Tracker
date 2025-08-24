import React, { useState, useRef } from 'react';
import api from '../lib/axios';
import { FormikContext, useFormikContext } from 'formik';

const OTPInput = ({ onOTPSubmit, onVerified }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);

  const { values } = useFormikContext();

  function handleChange(element, index) {
    const value = element.value;
    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }

  const verify = async (otpValue) => {
    try {
      const response = await api.post("/users/verifyOTP", { otp: otpValue, email: values.email });
      if(response.status === 200){
        console.log("OTP verified successfully");
        if(onVerified) onVerified();
      } else {
        console.log("OTP verification failed");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (onOTPSubmit) {
      const otpValue = otp.join('');
      console.log("Submitting OTP:", otpValue);
      verify(otpValue);
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 text-center text-xl font-semibold border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default OTPInput;
