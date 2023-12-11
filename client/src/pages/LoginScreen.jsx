import React, { useState, useEffect } from 'react';
import AuthForm from '../components/AuthForm';
import Logo from '../assets/mindcare-logo.png';
import Layout from './layouts/Layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [successCount, setSuccessCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password }); 
  };

  const handleLogin = async () => {
    try {
      // Validate that email and password are not empty
      if (!email || !password) {
        setError('Please fill in both email and password.');
        return;
      }
  
      console.log('Email:', email);
      console.log('Password:', password);
      const response = await axios.post('http://localhost:5000/login', {
        username: email,
        password,
      });
      console.log('Server Response:', response.data);
  
      // Check for successful login
      if (response.data === 'Login successful') {
        // Clear any existing error message
        setError(null);
  
        // Display success message for 3 seconds
        setSuccessMessage('Login successful');
        setSuccessCount(3);
  
        // Redirect to the dashboard page after a delay
        setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
      }
    } catch (error) {
      console.error('Login failed:', error.message);
  
      // Check error type and set appropriate error message
      if (error.response && error.response.status === 401) {
        setError('Invalid credentials. Please check your username and password.');
      } else {
        setError('Login failed. Please try again later.');
      }
    }
  };
  

  useEffect(() => {
    let timer;
    if (successCount > 0) {
      timer = setInterval(() => {
        setSuccessCount((prevCount) => prevCount - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [successCount]);
  

  return (
    <Layout>
      <main className='flex items-center h-screen '>
        <div className="flex flex-col md:flex-row w-screen items-center md:items-start justify-around">
          <img src={Logo} alt="logo" className=" w-1/4 bg-transparent" />
          <div className='text-white w-2/5'>
            <h2 className='text-4xl font-semibold mb-4 text-center'>Login</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
              <div className='flex flex-col'>
                <label className="mb-2">Email:</label>
                <input className="border rounded py-2 px-3 opacity-50 bg-gray-500 border-gray-200" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='flex flex-col'>
                <label className="mb-2">Password:</label>
                <input className="border rounded py-2 px-3 opacity-50 bg-gray-500" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="bg-[#6CD9BB] hover:bg-teal-500 text-black font-semibold py-2 px-4 rounded md:w-2/5 mx-auto">
                Login
              </button>
              {error && <div className='text-red-500 mb-4'>{error}</div>}
              {successMessage && (
          <div className='text-green-500 mb-4'>
            {successMessage}. Redirecting in {successCount} seconds...
          </div>)}
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default LoginPage;
