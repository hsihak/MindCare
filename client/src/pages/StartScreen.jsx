
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/MindCare_Logo.svg';
import Layout from './layouts/Layout';

const StartScreen = () => {
  return (
    <Layout>
      {/* <div className="text-center">
        <img src={Logo} alt="logo" className=" w-1/6 mx-auto bg-transparent" />
      </div>
      <div className="flex flex-col items-center justify-center mt-8 gap-4">
        <Link to="/login">
          <button className="bg-[#6CD9BB] hover:bg-teal-500 text-black font-semibold py-2 px-4 rounded">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-[#F29484] hover:bg-red-400 text-black py-2 px-4 font-semibold rounded">
            Sign Up
          </button>
        </Link>
      </div> */}
      <div className='text-center'>
        <img src={Logo} alt="logo" className=" w-1/6 mx-auto bg-transparent" />
      </div>
      <div>
        <Link to="/login">
          <button className="bg-[#6CD9BB] hover:bg-teal-500 text-black font-semibold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default StartScreen;
