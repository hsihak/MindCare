import React from 'react';

const Layout = ({ children }) => {
  return (
      <main className=' bg-[#0B233B] h-screen w-screen'>
        {children}
      </main>
  );
};

export default Layout;
