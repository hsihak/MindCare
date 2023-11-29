import React from 'react';
import UserIcon from '../assets/Icon fa-regular-user.svg';
import LanguageIcon from '../assets/Icon ion-ios-world-outline.svg';

const Navbar = () => {
  return (
    <div className='flex w-screen justify-between items-center'>
      <img src={UserIcon} alt='user-account icon' className=' w-6' />  
      <h1 className=' text-4xl text-white'>MINDCARE</h1>
      <img src={LanguageIcon} alt="language change icon" className=' w-6'  />
    </div>
  )
}

export default Navbar
