import React, { useEffect,useState } from 'react'

import LoginSuccessful from '../ToasterHelpers/LoginSuccesful'

import api from '../lib/axios';

const Home = () => {
  const [trackRecord, setTrackRecord] = useState([]);
  
  useEffect(()=>{
    const user= sessionStorage.getItem('user');
    const fetchData = async () => {
      try {
        const response = await api.get(`expenses/${user}`);
        setTrackRecord(response.data);
      } catch (error) {
        console.error("Error fetching track record:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <LoginSuccessful />
      <div>
        {trackRecord.map((record) => (
          <div key={record.id}>
            <h2>{record.title}</h2>
            <p>Amount: {record.amount}</p>
            <p>Date: {record.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
