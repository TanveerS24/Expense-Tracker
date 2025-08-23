import React, {useEffect} from 'react'
import api from '../lib/axios'
import * as yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'


import VerifyEmail from '../helpers/VerifyEmail'

const Register = () => {
  
  const initialValues = {
    username: 'user name',
    email: 'user@example.com',
    password: 'password',
  }

  const validateInput = yup.object().shape({
    username: yup.string().required('Username is required').min(4, 'Username must be at least 4 characters').max(16, 'Username must be at most 16 characters'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').max(16, 'Password must be at most 16 characters').required('Password is required'),
  })

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/users/register', data)
      console.log('Registration successful:', response.data)

      if (response.status === 201) {
        alert('Registration successful! You can now log in.');
        console.log('User ID:', response.data.user.id);
        sessionStorage.setItem('user', JSON.stringify(response.data.user._id));
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-700">
    {/* Background overlay */}
    <div className="absolute inset-0 bg-slate-700 opacity-60"></div>

    {/* Form Card */}
    <div className="relative z-10 w-full max-w-md p-8 rounded-2xl shadow-2xl bg-slate-800">
      <h1 className="text-white text-3xl font-bold text-center mb-6">Register</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validateInput}
        onSubmit={onSubmit}
      >
        <Form className="space-y-5">
          {/* Username */}
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-300 mb-1">Username</label>
            <Field 
              type="text" 
              id="username" 
              name="username"
              className="input input-"
            />
            <ErrorMessage name="username" component="div" className="text-red-400 text-sm mt-1" />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 mb-1">Email</label>
            <Field 
              type="email" 
              id="email" 
              name="email"
              className="input"
            />
            <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-300 mb-1">Password</label>
            <Field 
              type="password" 
              id="password" 
              name="password"
              className="input"
            />
            <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-1" />
          </div>
          <VerifyEmail/>
          {/* Submit Button */}
          <button 
            type="submit"
            className="btn btn-primary btn-ghost justify-center items-center"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  </div>

  )
}

export default Register;
