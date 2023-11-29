import React from 'react';
import AuthForm from '../components/AuthForm';
// import Logo from '../assets/MindCare_Logo.svg';
import Logo from '../assets/mindcare-logo.png';
import Layout from './layouts/Layout';

const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log('Login:', credentials);
  };

  return (
    <Layout>
      <main className='flex items-center h-screen '>
        <div className="flex flex-col md:flex-row w-screen items-center md:items-start justify-around">
          <img src={Logo} alt="logo" className=" w-1/4 bg-transparent" />
          <div className='text-white w-2/5'>
            <h2 className="text-4xl font-semibold mb-4 text-center">Login</h2>
            <AuthForm type="login" onSubmit={handleLogin} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default LoginPage;