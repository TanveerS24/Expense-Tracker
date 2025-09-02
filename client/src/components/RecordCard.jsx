import React from 'react'

const RecordCard = ({ record }) => {
  return (
    <div>
      <h2>{record.title}</h2>
      <p>{record.description}</p>
      <p>{record.amount}</p>
    </div>
  )
}

export default RecordCard
