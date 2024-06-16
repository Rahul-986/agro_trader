import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import fresh from "../assets/fresh.png"

const Layout = () => {
  return (
    <>
    <nav className="bg-green-900 p-4 text-white flex justify-between">
      <ul>
        <li>
          <img src={fresh} alt="" className='w-9' />
        </li>
      </ul>
      <ul className="flex space-x-[8rem] justify-evenly ">
        <li>
          <Link to="home" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="about" className="hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link to="contact" className="hover:text-gray-300">Contact</Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  );
};

export default Layout;
