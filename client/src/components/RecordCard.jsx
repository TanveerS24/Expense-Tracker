import React from 'react'

const RecordCard = ({ record }) => {
  return (
    <div>
      <p>{record.description}</p>
      <p>{record.amount}</p>
      <p>{record.date}</p>
      <p>{record.category}</p>
      <p>{record.transactionType}</p>
    </div>
  )
}

export default RecordCard
