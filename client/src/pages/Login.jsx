import React from 'react'
import { useNavigate, Link } from 'react-router';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import toast from 'react-hot-toast';

import api from '../lib/axios';

import ClickSpark from '../react-bits/ClickSpark'

import ClickAround from '../ToasterHelpers/ClickAround';

const Login = () => {
  const navigate = useNavigate();

  const validateInput = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').max(16, 'Password must be at most 16 characters').required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: ''
  };

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/users/login', data);

      if(response.status === 200) {
        console.log('Login successful:', response.data);
        sessionStorage.setItem('user', response.data.user._id);
        sessionStorage.setItem('username', response.data.user.username);
        toast.success(
          <span className="bg-[#36454F] text-[#F0F0F0] font-sans 
          text-base border border-[#B6AFA9] rounded-lg px-5 py-3">
            Login successful! Redirecting to home...
          </span>,
          {
            position: "bottom-left",
            duration:3000,
            style: { boxShadow: "0 2px 8px rgba(0,0,0,0.2)" },
          }
        );
        setTimeout(() => {
          navigate('/home');
        }, 3000);
      }
    } catch (error) {
      console.error('Login failed:', error);
      if (error.response && error.response.status === 401) {
        toast.error("Invalid email or password.");
      } else if (error.response && error.response.status === 404){
        toast.error("User not found. Please register.");
      } else {
        toast.error(`Internal Server Error`);
      }
    }
  }

  return (
    <>
      <ClickAround />
      <div className='fixed inset-0 z-10'>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      ></ClickSpark>
      </div>
      <div className='flex flex-col items-center justify-center min-h-screen bg-transparent'>
        <div className='absoluteinset-0 opacity-60'></div>
        <div className='relative z-10 w-full max-w-md p-8 rounded-2xl shadow-2xl'>
          <h1 className="text-white text-3xl font-bold text-center mb-6">Login</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validateInput}
            onSubmit={onSubmit}
          >
            <Form className="space-y-5">
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
              <button 
                type="submit"
                className="btn btn-outline btn-info hover:text-slate-800 w-full cursor-target align-middle text-blue-500" 
              >
                Login
              </button>
            </Form>
          </Formik>
        </div>
        <Link to="/register" className="text-blue-500 hover:underline cursor-target mt-4 relative z-20">Don't have an account? Register</Link>
      </div>
    </>
  )
}

export default Login
