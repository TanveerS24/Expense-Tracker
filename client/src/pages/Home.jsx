import React, { useEffect,useState } from 'react'

import LoginSuccessful from '../ToasterHelpers/LoginSuccesful'

import api from '../lib/axios';

import RecordCard from '../components/RecordCard';

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
    <>
        <div className='flex fixed top-0 z-50 mb-4 w-full h-fit py-5 bg-transparent justify-center text-3xl font-bold text-white'>
          <h1>Home</h1>
        </div>
        
        <div className='mt-20 p-4 space-y-4'>
          {trackRecord.map((record) => (
            <RecordCard key={record.id} record={record} />
          ))}
        </div>
        <LoginSuccessful />
    </>
  )
}

export default Home
