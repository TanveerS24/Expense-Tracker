import React,{ useEffect, useState } from 'react'
import { useLocation } from 'react-router';

const Header = () => {
    const location = useLocation();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {setTime(new Date())}, 1000);
        return () => clearInterval(timer);
    }, [])

    const username = sessionStorage.getItem('username') || 'User';
    const pagename = {
        "/home" : "Home",
        "/newRecord" : "Add Record",
        "/userdetails" : "User Details"
    }

  return (
    <>
        <div className='flex fixed top-0 w-full h-auto'>
            <h1 className='flex w-1/2 py-4 justify-start pl-4 font-semibold text-3xl'>
                {username}
            </h1>
            <div className='flex flex-col w-1/2 py-2 justify-end items-end gap-1 font-semibold text-lg pr-4'>
                <h1 className='py-0'>{pagename[location.pathname]}</h1>
                <h1 className='py-0'>{time.toLocaleTimeString()}</h1>
            </div>
        </div>
    </>
  )
}

export default Header
