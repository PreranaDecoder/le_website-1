import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import navbarLogo from "../assets/img/NavbarLogo.png";

import logo from "../assets/img/LogoFree.svg";

const meta = {
  title: "Logy.AI - contact",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Getintouch() {
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="pt-6 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mb-1">
              <div className="flex items-center justify-between px-6 py-3 bg-white border border-gray-100 rounded-full">
                <div className="w-auto">
                  <div className="flex flex-wrap items-center">
                    <div className="w-auto">
                      <Link className="inline-block" to="/">
                        <img
                          src={navbarLogo}
                          className="pt-2"
                          style={{
                            width: "85px",
                            transform: "translateY(3px) translateX(10px)",
                          }}
                          alt="Logo"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-auto">
                  <div className="flex flex-wrap items-center">
                    <div className="w-auto hidden lg:block">
                      <ul className="flex items-center justify-center ">
                        <li className="  ">
                          <Link
                            className=" inline-block px-6 text-sm font-bold text-gray-900 hover:text-gray-700  "
                            to="/"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className=" inline-block px-6 text-sm font-bold text-gray-900 hover:text-gray-700 "
                            to="/about"
                          >
                            About us
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="inline-block px-6 text-sm font-bold text-gray-900 hover:text-gray-700"
                            to="/products"
                          >
                            Products
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="inline-block px-6 text-sm font-bold text-gray-900 hover:text-gray-700"
                            to="/articles"
                          >
                            Articles
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="inline-block px-6 text-sm font-bold text-gray-900 hover:text-gray-700"
                            to="/cases"
                          >
                            Case Studies
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-auto">
                  <div className="flex flex-wrap items-center">
                    <div className="w-auto hidden lg:block">
                      <div className="flex flex-wrap -m-2">
                        <div className="w-full md:w-auto p-2" />
                        <div className="w-full md:w-auto p-2">
                          <Link
                            className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                            to="/contact"
                          >
                            Get in Touch
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="w-auto lg:hidden">
                      <a className="inline-block" onClick={toggleMenu}>
                        <svg
                          className="navbar-burger text-blue-500"
                          width={45}
                          height={45}
                          viewBox="0 0 56 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width={56}
                            height={56}
                            rx={28}
                            fill="currentColor"
                          />
                          <path
                            d="M37 32H19M37 24H19"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50"
                hidden={menu}
              >
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
                <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
                  <div className="flex flex-wrap justify-between h-full">
                    <div className="w-full">
                      <div className="flex items-center justify-between -m-2">
                        <div className="w-auto p-2">
                          <Link className="inline-block" to="/">
                            <img src={logo} style={{ width: "90px" }} alt="" />
                          </Link>
                        </div>
                        <div className="w-auto p-2">
                          <a
                            className="inline-block navbar-burger"
                            onClick={toggleMenu}
                          >
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 18L18 6M6 6L18 18"
                                stroke="#111827"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center py-8 w-full">
                      <ul>
                        <li className="mb-9">
                          <Link
                            className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                            to="/"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="mb-9">
                          <Link
                            className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                            to="/about"
                          >
                            About us
                          </Link>
                        </li>
                        <li className="mb-9">
                          <Link
                            className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                            to="products"
                          >
                            Products
                          </Link>
                        </li>
                        <li className="mb-9">
                          <Link
                            className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                            to="/articles"
                          >
                            Articles
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                            to="/cases"
                          >
                            Case Studies
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-end w-full pb-8">
                      <div className="flex flex-wrap -m-2">
                        <div className="w-full p-2">
                          <Link
                            className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                            to="/contact"
                          >
                            Get in Touch
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="flex flex-wrap justify-center -m-4">
              <div className="w-full md:flex-1 p-4"></div>
            </div>
          </div>
        </section>
        <section className="py-5 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-8 px-8 bg-white overflow-hidden border border-gray-100 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="w-full md:w-1/3 p-4">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-10 md:max-w-md">
                        <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold tracking-tight">
                          Let’s Connect!
                        </h2>
                        <p className="text-gray-500 font-normal text-2xl">
                          let's start something wonderful together. Call us with
                          any questions.
                        </p>
                      </div>
                      <div className="flex flex-wrap -m-5">
                        <div className="w-full p-5">
                          <div className="p-4 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                            <div className="flex flex-wrap -m-3">
                              <div className="w-auto p-3">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-xl">
                                  <svg
                                    width={32}
                                    height={32}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M18.666 21.3334C18.666 23.6934 17.6393 25.8267 15.9993 27.2801C14.586 28.5601 12.7193 29.3334 10.666 29.3334C6.25268 29.3334 2.66602 25.7467 2.66602 21.3334C2.66602 18.6338 4.01797 16.2419 6.07321 14.7965C6.40413 14.5638 6.85175 14.723 7.03033 15.086C8.28888 17.6443 10.6049 19.56 13.3593 20.3067C14.1993 20.5467 15.0793 20.6667 15.9993 20.6667C16.649 20.6667 17.2713 20.6051 17.8759 20.4917C18.2604 20.4196 18.6431 20.666 18.66 21.0568C18.664 21.1495 18.666 21.2419 18.666 21.3334Z"
                                      fill="#3B82F6"
                                    />
                                    <path
                                      d="M24 10.6666C24 11.7066 23.8 12.7066 23.44 13.6133C22.52 15.9333 20.5467 17.72 18.1067 18.3866C17.44 18.5733 16.7333 18.6666 16 18.6666C15.2667 18.6666 14.56 18.5733 13.8933 18.3866C11.4533 17.72 9.48 15.9333 8.56 13.6133C8.2 12.7066 8 11.7066 8 10.6666C8 6.25329 11.5867 2.66663 16 2.66663C20.4133 2.66663 24 6.25329 24 10.6666Z"
                                      fill="#3B82F6"
                                    />
                                    <path
                                      d="M29.3327 21.3334C29.3327 25.7467 25.746 29.3334 21.3327 29.3334C20.34 29.3334 19.3851 29.1524 18.5075 28.8188C18.0826 28.6573 18.0033 28.1135 18.2991 27.7683C19.8218 25.9918 20.666 23.7147 20.666 21.3334C20.666 20.8801 20.626 20.4267 20.5593 20.0001V20.0001C20.5197 19.7541 20.6452 19.5123 20.8631 19.3917C22.6286 18.4143 24.0702 16.9168 24.9687 15.0871C25.1472 14.7237 25.5951 14.5641 25.9263 14.797C27.9811 16.2425 29.3327 18.6341 29.3327 21.3334Z"
                                      fill="#3B82F6"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="flex-1 p-3">
                                <p className="text-gray-500 font-bold">Email</p>
                                <h3 className="font-heading text-xl text-gray-900 font-bold">
                                  humans@logy.ai
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4"></div>
                  <div className="w-full md:w-1/3 ">
                    <form
                      className="p-6 bg-gray-100 border border-gray-100 rounded-xl"
                      action="https://formspree.io/mjvalebe"
                      method="POST"
                    >
                      <div className="flex flex-wrap -m-3 mb-3">
                        <div
                          className="w-full p-2"
                          style={{ paddingBottom: "0" }}
                        >
                          <input
                            className="appearance-none px-6 py-2 w-full text-lg text-gray-500 font-normal bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-xl"
                            id="contactLightReverseInput4-1"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div
                          className="w-full p-2"
                          style={{ paddingBottom: "0" }}
                        >
                          <input
                            className="appearance-none px-6 py-2 w-full text-lg text-gray-500  bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-xl"
                            id="contactLightReverseInput4-2"
                            type="email"
                            placeholder="Enter Email address"
                            name="_replyto"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -m-3 mb-3">
                        <div
                          className="w-full p-2"
                          style={{ paddingBottom: "0" }}
                        >
                          <input
                            className="appearance-none px-6 py-2 w-full text-lg text-gray-500  bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-xl"
                            id="contactLightReverseInput4-3"
                            type="text"
                            placeholder="Enter your phone number"
                            name="phone"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -m-3 mb-0">
                        <div
                          className="w-full p-2"
                          style={{ paddingBottom: "0" }}
                        >
                          <label
                            className="block mb-2 text-sm text-gray-500 font-normal text-center"
                            htmlFor="contactLightReverseInput4-5"
                          >
                            Your message for us
                          </label>
                          <textarea
                            className="appearance-none px-6 py-5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-3xl"
                            id="contactLightReverseInput4-5"
                            type="text"
                            rows={4}
                            placeholder="Enter your message"
                            defaultValue={""}
                            name="message"
                            required
                          />
                        </div>
                        <div className="w-full p-3.5">
                          <div className="flex flex-wrap items-center -m-3">
                            <div className="w-full p-3">
                              <div className="flex flex-wrap md:justify-end -m-2">
                                <div className="w-full p-2">
                                  <input
                                    type="submit"
                                    value="Send"
                                    className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                                    href="#"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
