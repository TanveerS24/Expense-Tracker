import { useEffect, useState } from 'react'
import api from '../lib/axios';

const UserDetails = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem('user'));
    console.log("fetching details of ", userId);
    const userDetails = async () => {
      try {
        const response = await api.get(`users/userdetail`, { params: { id: userId } });
        if (response.status==200) {
          console.log("User details fetched successfully:", response.data);
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }
    userDetails();
  }, []);

  return (
    <div>
      <h1>User Details</h1>
    </div>
  )
}

export default UserDetails
