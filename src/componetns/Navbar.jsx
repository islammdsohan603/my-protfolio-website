import React from 'react';
import MyNavLinks from './MyNavLinks';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';
import MenuNavbar from './MenuNavbar';

const Navbar = () => {
  return (
    <div>
      <header className="bg-[#101829] z-50 shadow-xs shadow-amber-50 text-white py-3 fixed top-0 left-0 right-0">
        <nav className="w-10/12 mx-auto flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-lg md:text-2xl font-bold">
              SOHAN <span className="text-orange-600">Dev</span>
            </h1>
          </div>

          {/* url */}
          <MyNavLinks />

          {/* Github Links */}

          <Link
            href={`https://github.com/islammdsohan603`}
            className="hidden md:flex items-center gap-4 btn btn-accent"
          >
            <FaGithub />
            Click Heire
          </Link>
          <MenuNavbar />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
