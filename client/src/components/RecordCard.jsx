import React from 'react'

const RecordCard = ({ record }) => {
  const description = record.description;
  const amount = record.amount;
  const date = new Date(record.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).replace(/ /g, "-");

  const category = record.category;
  const transactionType = record.transactionType;

  const amountColor = transactionType === 'Credit' ? 'text-green-500' : 'text-red-500';

  return (
    <>
      <div 
        className="flex w-full h-full flex-col justify-between border-4 border-transparent overflow-hidden font-medium
          rounded p-5 shadow-md hover:scale-105 hover:shadow-lg transition duration-300 ease-in">
        <div className='flex flex-row w-full h-fit py-3'>
          <div className='flex w-1/2 h-auto'>{date}</div>
          <div className={`flex w-1/2 h-auto justify-end items-end ${amountColor}`}>{transactionType ==='Credit' ? '+' : '-'} {amount}</div>
        </div>
        <div className='flex flex-col w-full h-fit text-cyan-400 py-3 gap-3'>
          <div className='flex w-full h-auto font-bold'>{description}</div>
          <div className='flex w-full h-auto italic'>{category}</div>
        </div>
      </div>
    </>
  )
}

export default RecordCard
