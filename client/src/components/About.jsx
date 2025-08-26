import React from 'react'
import { useNavigate, Link } from 'react-router'

import hearts from '../icons/hearts.png';

const About = () => {
    const navigate = useNavigate();

    
  return (
    <div className='absolute bottom-4 right-4 text-sm cursor-target'>
      <Link to='/aboutme' className='cursor-target'>Made with
        <img src={hearts} alt="hearts" className='inline-block w-4 h-4 mx-2' />
         by Tanveer</Link>
    </div>
  )
}

export default About
