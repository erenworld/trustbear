import React, { useState, useEffect } from 'react';
import '../App.css';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '#features',
    label: 'Comment ça marche ?',
  },
  {
    href: '#pricing',
    label: 'Tarifs',
  },
  {
    href: '#testimonials',
    label: 'Inspiration',
  },
  {
    href: '#faq',
    label: 'FAQ',
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 50; // You can adjust this value to suit your needs
  //     setScrolled(isScrolled);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="relative">
      <div className="flex justify-between  h-24 px-10 xl:px-28 items-center max-w-screen-2xl mx-auto">
        <div className="flex items-center">
          <a href="/">
            <img
              src="https://asset.brandfetch.io/idWfyG1b10/idEAu1lhUl.svg"
              alt=""
              className="w-20 h-20 hover:text-zinc-600"
            />
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          {routeList.map((route) => (
            <a
              key={route.href}
              href={route.href}
              className="header-link font-Inter font-medium text-secondary hover:text-zinc-600"
            >
              {route.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="mr-2 font-medium hover:text-zinc-600 px-3 py-2 rounded-md"
          >
            Se connecter
          </a>
          <a href="#" className="text-white font-medium">
            <div className="bg-primaryBtn px-3 py-2 rounded-md ml-2">
              Commencer
            </div>
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-secondary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-secondary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav className="flex flex-col space-y-6">
            {routeList.map((route) => (
              <a
                key={route.href}
                href={route.href}
                className="text-xl font-Inter font-medium text-secondary hover:text-zinc-600"
                onClick={toggleMenu}
              >
                {route.label}
              </a>
            ))}
            <a
              href="#"
              className="text-xl font-Inter font-medium text-secondary hover:text-zinc-600"
              onClick={toggleMenu}
            >
              Se connecter
            </a>
            <a
              href="#"
              className="text-xl font-Inter font-medium text-white bg-primaryBtn px-3 py-2 rounded-md"
              onClick={toggleMenu}
            >
              Commencer
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
