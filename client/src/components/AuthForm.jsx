import React, { useState } from 'react';

const AuthForm = ({ type, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
        <div className='flex flex-col'>
            <label className="mb-2">
                Email:
            </label>
            <input className="border rounded py-2 px-3 opacity-50 bg-gray-500 border-gray-200" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        </div>
        <div className='flex flex-col'>
            <label className="mb-2">
                Password:
            </label>
            <input className="border rounded py-2 px-3 opacity-50 bg-gray-500" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      <button type="submit" className="bg-[#6CD9BB] hover:bg-teal-500 text-black font-semibold py-2 px-4 rounded md:w-2/5 mx-auto">
        {type === 'login' ? 'Login' : 'Signup'}
      </button>
    </form>
  );
};

export default AuthForm;