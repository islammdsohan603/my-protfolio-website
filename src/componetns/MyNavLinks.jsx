'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navitems = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/skills', title: 'Skills' },

  { path: '/projects', title: 'Projects' },
  { path: '/contact', title: 'Contact' },
];

const MyNavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-6">
      {navitems.map((item, i) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={i}
            href={item.path}
            className={`transition duration-300 ${
              isActive
                ? 'text-orange-600 border-b-2 border-orange-600'
                : 'text-white hover:text-orange-600'
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MyNavLinks;
