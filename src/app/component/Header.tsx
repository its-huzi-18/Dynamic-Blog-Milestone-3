"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

function Header() {
  // NavBar
  const navBar = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Blog", link: "/Blog" },
    { name: "Contact", link: "/Contact" },
  ];

  // Time and Date
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="text-grey-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex-1">
          <span style={{ color: "black" }}>{currentDate}</span> <br />
          <span style={{ color: "blue", fontWeight: "bold" }}>{currentTime}</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
          <ul className="flex space-x-4">
            {navBar.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className=" mr-5 hover:text-red-700 transition-colors duration-300 transform font-medium  hover:text-lg"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          className="rounded-[4px] inline-flex text-white items-center bg-blue-700 border-none py-1 px-3 focus:outline-none"
        >
          <Link
            href={"https://www.linkedin.com/in/huzaifa-wahab-1137432ba/"}
            target="_blank"
          >
            <div className="flex items-center">
              Linked<span>
                <FaLinkedinIn />
              </span>
            </div>
          </Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
