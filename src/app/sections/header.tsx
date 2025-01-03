import React from 'react';
import Image from 'next/image';
import logo from "@/Assets/heading.png"
const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full shadow-sm bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Image
          src={logo}
          alt="Company`s Logo"
          height={60}
          className="p-4 rounded-lg"
        />
      </div>
    </nav>
  );
};

export default Header;
