import React, { useState } from 'react';
import Sidebar from '../src/Sidebar/Sidebar';
 
const RootLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // Manage the sidebar expansion state here

  return (
    <div className="flex gap-0">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />{/* Pass isOpen and setIsOpen as props */}
      <div className={`flex-1 overflow-y-auto md:relative ${isOpen ? 'ml-[16rem]' : ''}`}> {/* Adjust content area margin based on sidebar state */}
        <main className="max-w-7xl mx-auto py-4">{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
