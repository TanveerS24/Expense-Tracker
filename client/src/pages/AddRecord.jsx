import React from 'react'
import { Formik, Form, Field } from 'formik';

const AddRecord = () => {

  const initialValues = {
    description: '',
    amount: '',
    category: '',
    transactionType: '',
    date: ''
  };

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-transparent'>
        <div className='absolute inset-0 opacity-60'></div>
        <div className='relative z-10 w-full max-w-md p-8 rounded-2xl shadow-2xl'>
          <h1 className="text-white text-3xl font-bold text-center mb-6">Add Record</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            <Form>
              <div>
                <label htmlFor="description">Description</label>
                <Field id="description" name="description" placeholder="Enter description" />
              </div>
              <div>
                <label htmlFor="amount">Amount</label>
                <Field id="amount" name="amount" placeholder="Enter amount" />
              </div>
              <button type="submit" className='cursor-target'>Add Record</button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}


export default AddRecord;
