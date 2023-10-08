import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import logo from "../assets/img/LogoFree.svg";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Aboutus() {
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section className="pt-6 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <div className="flex items-center justify-between px-6 py-3.5 bg-white border border-gray-100 rounded-full">
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto">
                    <Link className="inline-block" to="/">
                      <img src={logo} style={{ width: "90px" }} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto hidden lg:block">
                    <ul className="flex items-center justify-center ">
                      <li className="mr-9  ">
                        <Link
                          className=" inline-block text-sm font-bold text-gray-900 hover:text-gray-700  "
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="mr-9">
                        <Link
                          className="bg-gray-50 px-6 py-2 rounded-full inline-block text-sm font-bold text-gray-900 hover:text-gray-700 "
                          to="/about"
                        >
                          About us
                        </Link>
                      </li>
                      <li className="mr-9">
                        <Link
                          className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          to="/products"
                        >
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          to="/articles"
                        >
                          Articles
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
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                          href="/contact"
                        >
                          Get in Touch
                        </a>
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
                          to="/products"
                        >
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          to="/articles"
                        >
                          Articles
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
      <section className="pb-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-6"></div>
          <div className="bg-white overflow-hidden rounded-t-3xl">
            <div className="px-8 pt-20">
              <div className="md:max-w-2xl text-center mx-auto">
                <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                  Best caption here
                </span>
                <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                  Build what you imagine
                </h1>
                <p className="mb-8 text-xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  venenatis volutpat velit, quis iaculis velit bibendum a.
                  Maecenas accumsan fermentum nisl.
                </p>
                <div className="flex flex-wrap justify-center mb-20 -m-2">
                  <div className="w-full md:w-auto p-2">
                    <a
                      className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                      href="#"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-20 px-8 max-w-max mx-auto">
                <img src="zanrly-assets/images/headers/video.png" alt="" />
                <a
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block px-8 py-3.5 text-lg text-center text-gray-900 font-bold bg-gray-50 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full"
                  href="#"
                >
                  Watch Video
                </a>
              </div>
              <div className="absolute left-0 top-0 w-full h-1/2 bg-gray-100">
                <div className="h-full bg-white rounded-b-3xl" />
              </div>
              <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gray-50" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="px-8 bg-white border border-gray-100 rounded-3xl py-16">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-lg mx-auto text-center">
                <h2 className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
                  Content here
                </h2>
                <p className="text-gray-500 font-bold">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-16 px-8 bg-white border border-gray-100 rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 max-w-lg mx-auto text-center">
                <h2 className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
                  Grow fast, with us
                </h2>
                <p className="text-gray-500 font-bold">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="w-full md:w-1/2 p-4">
                  <div className="py-14 px-8 text-center h-full bg-gray-100 rounded-3xl">
                    <div className="md:max-w-xs mx-auto">
                      <h2 className="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-gray-900 font-black tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-green-dark">
                          98%
                        </span>
                      </h2>
                      <h3 className="font-heading mb-3.5 text-xl text-gray-900 font-bold">
                        Average Satisfaction Rate
                      </h3>
                      <p className="text-gray-600 font-bold">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="py-14 px-8 text-center h-full bg-gray-100 rounded-3xl">
                    <div className="md:max-w-xs mx-auto">
                      <h2 className="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-gray-900 font-black tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-orange">
                          117%
                        </span>
                      </h2>
                      <h3 className="font-heading mb-3.5 text-xl text-gray-900 font-bold">
                        Average ROI on Ads
                      </h3>
                      <p className="text-gray-600 font-bold">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 overflow-hidden py-10">
        <div className="container mx-auto px-4">
          <div className="px-8 bg-white rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-8">
                  <div className="md:max-w-lg">
                    <h2 className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-black tracking-tight text-left">
                      Our Key Investor
                    </h2>
                    <p className="mb-8 text-xl font-bold text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis venenatis volutpat velit, quis iaculis velit bibendum
                      a. Maecenas accumsan fermentum nisl.
                    </p>
                    <div className="flex flex-wrap -m-2">
                      <div className="w-full md:w-auto p-2">
                        <a
                          className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                          href="#"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    className="mx-auto md:mr-0 rounded-3xl p-6"
                    src="zanrly-assets/images/features/invest.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-xl mx-auto text-center">
            <span className="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest">
              Our team
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
              The brain behind Logy.AI
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/3 p-4">
              <div className="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-white rounded-3xl">
                <div className="flex-initial mb-8">
                  <img
                    className="mb-8 mx-auto rounded-3xl"
                    src="zanrly-assets/images/teams/avatar.png"
                    alt=""
                  />
                  <h3 className="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">
                    John Doe
                  </h3>
                  <p className="text-sm text-gray-500 font-bold">
                    Design, Founder
                  </p>
                </div>
                <div className="flex-initial">
                  <div className="flex flex-wrap justify-center -m-1.5">
                    <div className="w-auto p-1.5">
                      <a
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
                        href="#"
                      >
                        <img src="zanrly-assets/images/insta.svg" alt="" />
                      </a>
                    </div>
                    <div className="w-auto p-1.5">
                      <a
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
                        href="#"
                      >
                        <img src="zanrly-assets/images/twitter.svg" alt="" />
                      </a>
                    </div>
                    <div className="w-auto p-1.5">
                      <a
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
                        href="#"
                      >
                        <img src="zanrly-assets/images/fb.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-white rounded-3xl">
                <div className="flex-initial mb-8">
                  <img
                    className="mb-8 mx-auto rounded-3xl"
                    src="zanrly-assets/images/teams/avatar.png"
                    alt=""
                  />
                  <h3 className="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">
                    John Doe
                  </h3>
                  <p className="text-sm text-gray-500 font-bold">
                    Design, Founder
                  </p>
                </div>
                <div className="flex-initial">
                  <div className="flex flex-wrap justify-center -m-1.5">
                    <div className="w-auto p-1.5">
                      <a
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
                        href="#"
                      >
                        <img src="zanrly-assets/images/insta.svg" alt="" />
                      </a>
                    </div>
                    <div className="w-auto p-1.5">
                      <a
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
                        href="#"
                      >
                        <img src="zanrly-assets/images/twitter.svg" alt="" />
                      </a>
                    </div>
                    <div className="w-auto p-1.5">
                      <a
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
                        href="#"
                      >
                        <img src="zanrly-assets/images/fb.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-white rounded-3xl">
                <div className="flex-initial mb-8">
                  <img
                    className="mb-8 mx-auto rounded-3xl"
                    src="zanrly-assets/images/teams/avatar.png"
                    alt=""
                  />
                  <h3 className="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">
                    John Doe
                  </h3>
                  <p className="text-sm text-gray-500 font-bold">
                    Design, Founder
                  </p>
                </div>
                <div className="flex-initial">
                  <div className="flex flex-wrap justify-center -m-1.5">
                    <div className="w-auto p-1.5">
                      <a
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
                        href="#"
                      >
                        <img src="zanrly-assets/images/insta.svg" alt="" />
                      </a>
                    </div>
                    <div className="w-auto p-1.5">
                      <a
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
                        href="#"
                      >
                        <img src="zanrly-assets/images/twitter.svg" alt="" />
                      </a>
                    </div>
                    <div className="w-auto p-1.5">
                      <a
                        className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
                        href="#"
                      >
                        <img src="zanrly-assets/images/fb.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-16 px-8 bg-white rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap -m-8 mb-8">
                <div className="w-full md:w-1/3 p-8">
                  <img
                    className="mb-6"
                    src="zanrly-assets/logos/zanrly-logo-small.svg"
                    alt=""
                  />
                  <p className="text-xl font-bold text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis venenatis volutpat velit, quis iaculis velit bibendum.
                  </p>
                </div>
                <div className="w-full md:w-1/3 p-8">
                  <ul className="md:max-w-max ml-auto text-left">
                    <li className="mb-6">
                      <a
                        className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                        href="#"
                      >
                        Products
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                        href="#"
                      >
                        About us
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                        href="#"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                        href="#"
                      >
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a
                        className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 p-8">
                  <ul className="md:max-w-max ml-auto text-left">
                    <li className="mb-4">
                      <a
                        className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                        href="#"
                      >
                        Docs
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                        href="#"
                      >
                        Knowledge Base
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                        href="#"
                      >
                        System Status
                      </a>
                    </li>
                    <li>
                      <a
                        className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                        href="#"
                      >
                        Security
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between -m-4">
                <div className="w-auto p-4">
                  <p className="font-bold">
                    <span>Ⓒ Copyright. All rights reserved by </span>
                    <a className="text-blue-500 hover:text-blue-600" href="#">
                      Logy.AI
                    </a>
                  </p>
                </div>
                <div className="w-auto p-4">
                  <div className="flex flex-wrap -m-4">
                    <div className="w-auto p-4">
                      <a className="block" href="#">
                        <img src="zanrly-assets/images/insta.svg" alt="" />
                      </a>
                    </div>
                    <div className="w-auto p-4">
                      <a className="block" href="#">
                        <img src="zanrly-assets/images/twitter.svg" alt="" />
                      </a>
                    </div>
                    <div className="w-auto p-4">
                      <a className="block" href="#">
                        <img src="zanrly-assets/images/footers/fb.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
