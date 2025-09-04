import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router';

import api from '../lib/axios';

import RecordCard from '../components/RecordCard';

const Home = () => {
  const navigate = useNavigate();
  const [trackRecord, setTrackRecord] = useState([]);
  
  useEffect(()=>{
    const user= sessionStorage.getItem('user');
    if(user===null){
      navigate('/login');
      return;
    }
    const fetchData = async () => {
      try {
        const date = new Date();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        console.log(`Fetching data for month: ${month}, year: ${year}`);
        const response = await api.get(`expenses/${user}/monthly`,{
          params: { month, year }
        });
        setTrackRecord(response.data);
      } catch (error) {
        console.error("Error fetching track record:", error);
      }
    };
    fetchData();
    
  }, []);

  return (
    <>  
        <div className='mt-20 p-4 space-y-4'>
          {trackRecord.map((record) => (
            <RecordCard key={record.id} record={record} />
          ))}
        </div>
    </>
  )
}

export default Home
