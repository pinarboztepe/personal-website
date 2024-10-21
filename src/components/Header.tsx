import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container flex items-center justify-between px-6 py-4 text-2xl font-bold text-black">
        <Image src="/images/logo.jpeg" alt="Logo" width={100} height={100}></Image>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex space-x-4 lg:space-x-6 items-center text-2xl font-bold text-gray-800`}
        >
          <ul className="flex space-x-8">
            <li>
              <Link href="#home" scroll={false} className=" hover:text-slate-500">Home</Link>
            </li>
            <li>
              <Link href="#about" scroll={false} className=" hover:text-slate-500">About Me</Link>
            </li>
            <li>
              <Link href="#projects" scroll={false} className=" hover:text-slate-500">Projects</Link>
            </li>
            <li>
              <Link href="#contact" scroll={false} className=" hover:text-slate-500">Contact Me</Link>
            </li>
          </ul>

          <div className="social">
            <ul className="flex space-x-4 ml-10">
                <li>
                <Link href="https://github.com/pinarboztepe" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg" className="text-gray-500 hover:text-slate-400" />
                </Link>
                </li>
                <li>
                <Link href="https://www.linkedin.com/in/pinar-boztepe/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-gray-500 hover:text-slate-400" />
                </Link>
                </li>
            </ul>
          </div>
        </nav>
      </div>
      <hr className="border-t border-black" />
    </header>
  );
}