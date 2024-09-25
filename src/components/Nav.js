// Nav.js
import React, { useState } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import OurIdentity from './OurIdentity';
import RefillStatus from './RefillStatus';
import ContactUs from './ContactUs';
import FAQ from './FAQ';
import NetworkSelect from "./NetworkSelect";
import NetworkPlanes from "./NetworkPlanes";

export default function Nav() {
  function f1() {
    document.getElementById("father").style.display = "block";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "block";
  }

  function f2() {
    document.getElementById("father").style.display = "none";
    document.getElementById("img2").style.display = "block";
    document.getElementById("img3").style.display = "none";
  }
  let [checked,setChecked]=useState();
  function changeMode(event) {
    let x = document.getElementById('checkbox')
    if (x.checked) {
      document.getElementById("body").style.backgroundColor = "black";
      document.getElementById("body").style.color = "white";
      document.getElementById("body").style.transition = "all 1s";
      setChecked(true);
    }
    else {
      document.getElementById("body").style.backgroundColor = "white";
      document.getElementById("body").style.color = "black";
      document.getElementById("body").style.transition = "all 2s";
      setChecked(false);
    }
  }

  return (
    <BrowserRouter>
      <div>
        <header id="header">
          <div id="logo">
            <h1 id="siteName">
              <span>RECHARGE</span>.COM
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              id="img2"
              onClick={f1}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              id="img3"
              onClick={f2}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>

          <div id="father">
            <div id="navbar">
              <ul>
                <Link to="/">Home</Link>
                <Link to="/OurIdentity">Our Identity</Link>
                <Link to="/RefillStatus">Refill Status</Link>
                <Link to="/ContactUs">Contact Us</Link>
                <Link to="/FAQ">FAQ</Link>
              </ul>
            </div>
            <div id="three" method="post">
              <label className="inline-flex items-center me-5 cursor-pointer">
                <input type="checkbox" id="checkbox"  onChange={changeMode} className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {(checked) ? <svg id="light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg> : <svg id="dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>}
                </span>
              </label>
            </div>
          </div>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurIdentity" element={<OurIdentity />} />
        <Route path="/RefillStatus" element={<RefillStatus />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/NetworkSelect" element={<NetworkSelect />} />
        <Route path="/NetworkPlanes" element={<NetworkPlanes />} />

      </Routes>
    </BrowserRouter>
  );
}
