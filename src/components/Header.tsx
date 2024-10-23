'use client'
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-zinc-900 shadow-md w-full">
      <div className="container flex items-center justify-between px-6 py-4 text-2xl font-bold text-black dark:text-white">
      <div className="z-50 p-1 rounded-lg bg-white shadow-lg shadow-black dark:shadow-zinc-500">
        <Image src="/images/logo.jpeg" alt="Logo" width={100} height={100} className="rounded-full"></Image>
      </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden z-50">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
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
          } lg:flex lg:space-x-6 lg:flex-row flex-col space-y-4 lg:space-y-0 absolute lg:static right-0 top-20 bg-white dark:bg-zinc-900 lg:bg-transparent w-full lg:w-auto lg:items-center text-2xl font-bold text-gray-800 dark:text-gray-200 lg:shadow-none shadow-lg z-50`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 text-center lg:text-left">
              <li>
                <Link href="#home" scroll={true} className=" hover:text-slate-500 dark:hover:text-slate-300">Home</Link>
              </li>
              <li>
                <Link href="#about" scroll={true} className=" hover:text-slate-500 dark:hover:text-slate-300">About Me</Link>
              </li>
              <li>
                <Link href="#projects" scroll={true} className=" hover:text-slate-500 dark:hover:text-slate-300">Projects</Link>
              </li>
              <li>
                <Link href="#contact" scroll={true} className=" hover:text-slate-500 dark:hover:text-slate-300">Contact Me</Link>
              </li>
            </ul>

            <div className="social mt-4 lg:mt-0">
              <ul className="flex space-x-4 justify-center lg:justify-start">
                  <li>
                  <Link href="https://github.com/pinarboztepe" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="lg" className="text-gray-500 hover:text-slate-400 dark:text-gray-200 dark:hover:text-slate-300" />
                  </Link>
                  </li>
                  <li>
                  <Link href="https://www.linkedin.com/in/pinar-boztepe/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-gray-500 hover:text-slate-400 dark:text-gray-200 dark:hover:text-slate-300" />
                  </Link>
                  </li>
                  <li>
                    <ThemeToggle />
                  </li>
              </ul>
            </div>
        </nav>
      </div>
      <hr className="border-t border-black dark:border-white" />
    </header>
  );
}