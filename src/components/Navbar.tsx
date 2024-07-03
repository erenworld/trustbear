import React, { useState } from 'react';
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

  return (
    <div className="container mx-auto px-4  mt-10">
      <div className="flex">
        <div className="relative">
          <a
            href=""
            className="flex items-center font-PTserif font-black text-primary text-2xl"
          >
            <svg
              viewBox="0 0 90 60"
              fill="none"
              className="css-11ukie w-14 mr-3"
            >
              <circle
                transform="matrix(-1 0 0 1 60 30)"
                fill="#B8D2FF"
                r="30"
              ></circle>
              <path
                d="M60 60c-16.418 0-29.806-13.301-29.806-29.709H90C90 46.7 76.612 60 60 60z"
                fill="#005DFF"
              ></path>
              <path
                d="M30 30c0 16.568-13.325 30-30 30V0c16.675 0 30 13.431 30 30z"
                fill="#FF6A00"
              ></path>
            </svg>
            Feeduser{' '}
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
                className="ml-1 mt-1"
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            </i>
          </a>
          <h1 className="font-PTserif font-bold text-5xl text-primary w-74 mt-28 mb-3 leading-tight">
            Obtenez des feedbacks. Rendez vos clients heureux.
          </h1>
          <p className="text-secondary font-roboto leading-normal w-full mt-1">
            Collectez les problèmes, les idées et les compliments avec un simple
            widget. Recevez-les par e-mail. Plongez-vous dans le détail avec le
            tableau de bord.
          </p>
          <button className="rounded-full mt-6 bg-blue-600 text-white px-4 py-2 font-roboto text-sm font-medium hover:bg-blue-800 hover:ease-in-out duration-100">
            Commencer
          </button>
        </div>
        <div>
          <svg
            width="729"
            viewBox="0 0 729 624"
            fill="none"
            className="css-1o5inp8"
          >
            <g clip-path="url(#hero_svg__clip0)">
              <path
                d="M105.059 104A104.03 104.03 0 001.029-.03V104h104.03z"
                fill="#B8D2FF"
              ></path>
              <path
                d="M105-.03A104.027 104.027 0 01209.029 104H105V-.03zM624.852-.03A104.032 104.032 0 01728.882 104h-104.03V-.03z"
                fill="#005DFF"
              ></path>
              <path
                d="M624.911.03a104.03 104.03 0 11-208.058 0h208.058z"
                fill="#B8D2FF"
              ></path>
              <path
                d="M416.97 104a104.028 104.028 0 10-208.058 0H416.97z"
                fill="#FF6A00"
              ></path>
              <g opacity="0.53">
                <path
                  d="M520.822 104a104.027 104.027 0 00104.029 104.029V104H520.822z"
                  fill="#B8D2FF"
                ></path>
                <path
                  d="M728.822 208.029A104.026 104.026 0 01624.792 104h104.03v104.029zM520.881 208.029A104.026 104.026 0 01416.852 104h104.029v104.029z"
                  fill="#005DFF"
                ></path>
                <path
                  d="M.97 207.971a104.028 104.028 0 01177.589-73.56 104.029 104.029 0 0130.469 73.56H.969z"
                  fill="#B8D2FF"
                ></path>
                <path
                  d="M208.91 104a104.027 104.027 0 00104.03 104.029A104.027 104.027 0 00416.969 104H208.91z"
                  fill="#FF6A00"
                ></path>
              </g>
              <path
                d="M104 312a104.027 104.027 0 00104.029 104.029V312H104z"
                fill="#B8D2FF"
              ></path>
              <path
                d="M207.97 312a104.027 104.027 0 0164.22-96.111A104.027 104.027 0 01416.029 312H207.97z"
                fill="#005DFF"
              ></path>
              <path
                d="M729.029 312.059A104.03 104.03 0 01625 208.029h104.029v104.03z"
                fill="#B8D2FF"
              ></path>
              <path
                d="M520.941 207.971A104.026 104.026 0 00416.912 312h104.029V207.971z"
                fill="#FF6A00"
              ></path>
              <g opacity="0.53">
                <path
                  d="M520.03 624.059a104.025 104.025 0 01-73.56-30.47 104.025 104.025 0 010-147.119A104.025 104.025 0 01520.03 416v208.059zM729.029 416.059A104.03 104.03 0 01625 312.029h104.029v104.03z"
                  fill="#005DFF"
                ></path>
                <path
                  d="M207.969 415.97a104.033 104.033 0 01104.03-104.029c27.59 0 54.05 10.96 73.56 30.469a104.032 104.032 0 0130.469 73.56H207.969z"
                  fill="#B8D2FF"
                ></path>
                <path
                  d="M521.03 416.029a104.025 104.025 0 0096.11-64.219A104.029 104.029 0 10417 312h104.03v104.029zM416.03 416A104.032 104.032 0 00312 520.029h104.03V416z"
                  fill="#FF6A00"
                ></path>
              </g>
            </g>
            <defs>
              <clipPath id="hero_svg__clip0">
                <path fill="#fff" d="M0 0h729v624H0z"></path>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      {/* <div className="flex justify-between  h-24 px-10 xl:px-28 items-center max-w-screen-2xl mx-auto">
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
      )} */}
    </div>
  );
};

export default Navbar;
