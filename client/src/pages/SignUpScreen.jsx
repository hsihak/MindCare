import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import Logo from '../assets/MindCare_Logo.svg';
import Layout from './layouts/Layout';

const SignupPage = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (userInfo) => {
    console.log('Signup:', userInfo);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, email, password, confirmPassword });
  };

  return (
    <div>
      {/* <h2>Signup</h2>
      <AuthForm type="signup" onSubmit={handleSignup} /> */}
    <Layout>
      <main className='flex items-center justify-center h-screen'>
        <div className="flex">
          <img src={Logo} alt="logo" className=" w-1/5 mx-auto bg-transparent" />
          <div className='text-white'>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                    <div className='flex flex-col'>
                        <label className="mb-2">
                            Username
                        </label>
                        <input className="border rounded py-2 px-3" type="email" value={username} onChange={(e) => setUsername(e.target.value)} />

                    </div>
                    <div className='flex flex-col'>
                        <label className="mb-2">
                            Email
                        </label>
                        <input className="border rounded py-2 px-3" type="password" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className="mb-2">
                            Password:
                        </label>
                        <input className="border rounded py-2 px-3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className="mb-2">
                            Confirm Password:
                        </label>
                        <input className="border rounded py-2 px-3" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign Up
                    </button>
                </form>
            </div>
          </div>
        </div>
      </main>

    </Layout>
    </div>
  );
};

export default SignupPage;
