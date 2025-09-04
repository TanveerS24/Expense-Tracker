import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router'
import * as yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'

import api from '../lib/axios'

import VerifyEmail  from '../helpers/VerifyEmail'
import VerifyOTP from '../helpers/VerifyOTP'

import EmailVerified from '../ToasterHelpers/EmailVerified'
import ClickAround from '../ToasterHelpers/ClickAround'

import ClickSpark from '../react-bits/ClickSpark'
import toast from 'react-hot-toast'

const Register = () => {

  const navigate = useNavigate();

  const [registerStatus, setRegisterStatus] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [showVerifyEmail, setShowVerifyEmail] = useState(true);

  const validateInput = yup.object().shape({
    username: yup.string().required('Username is required').min(4, 'Username must be at least 4 characters').max(16, 'Username must be at most 16 characters'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').max(16, 'Password must be at most 16 characters').required('Password is required'),
  })

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/users/register', data)

      if (response.status === 201) {
        console.log('Registration successful:', response.data)
        console.log('User ID:', response.data.user.id);
        sessionStorage.setItem('user', response.data.user._id);
        localStorage.removeItem('status');
        toast.success(
          <span className="bg-[#36454F] text-[#F0F0F0] font-sans 
          text-base border border-[#B6AFA9] rounded-lg px-5 py-3">
            Registeration successful! Redirecting to home...
          </span>,
          {
            position: "bottom-left",
            duration:3000,
            style: { boxShadow: "0 2px 8px rgba(0,0,0,0.2)" },
          }
        );
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else if (response.status === 409) {
        toast.error('Email already exists');
        console.error('Email already exists:', response.data);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  return (
    <>
    <ClickAround/>
    <div className='fixed inset-0 z-10'>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      ></ClickSpark>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
        <div className="absolute inset-0 opacity-60"></div>
          <div className="relative z-20 w-full max-w-md p-8 rounded-2xl shadow-2xl">
            <h1 className="text-white text-3xl font-bold text-center mb-6">Register</h1>

          <Formik
            validationSchema={validateInput}
            onSubmit={onSubmit}
            initialValues={{
              username: '',
              email: '',
              password: ''
            }}
          >
            <Form className="space-y-5">
              <div className="flex flex-col">
                <label htmlFor="username" className="text-gray-300 mb-1">Username</label>
                <Field 
                  type="text" 
                  id="username" 
                  name="username"
                  className="input input-text w-auto cursor-target"
                  placeholder="Enter your username"
                />
                <ErrorMessage name="username" component="div" className="text-red-400 text-sm mt-1" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-300 mb-1">Email</label>
                <Field 
                  type="email" 
                  id="email" 
                  name="email"
                  className="input input-text w-auto cursor-target"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="text-gray-300 mb-1">Password</label>
                <Field 
                  type="password" 
                  id="password" 
                  name="password"
                  className="input input-text w-auto cursor-target"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-1" />
              </div>
              {showVerifyEmail && (
                <VerifyEmail onEmailVerified={() => {
                  setShowOTP(true);
                  setShowVerifyEmail(false);
                }} />
              )}
              {showOTP && (
                <VerifyOTP
                  onOTPSubmit={(otpValue) => {
                    console.log('OTP Entered:', otpValue);
                  }}
                  onVerified={() => {
                    setRegisterStatus(true);
                    EmailVerified();
                  }}
                />
              )}

              <button 
                type="submit"
                className="btn btn-outline btn-info w-full align-middle text-blue-500 cursor-target hover:text-slate-800 disabled:bg-gray-600 disabled:text-gray-900" disabled={!registerStatus}
              >
                Register
              </button>
            </Form>
          </Formik>
        </div>
        <Link to="/login" className="text-blue-500 mt-4 hover:underline relative z-20 cursor-target">Already have an account? Login</Link>
    </div>
    </>
  )
}

export default Register;
