import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import logo from "../assets/img/LogoFree.svg";
import logyanim from "../assets/zanrly-assets/images/headers/logyanim.gif";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
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
                            className="bg-gray-50 px-6 py-2 rounded-full inline-block text-sm font-bold text-gray-900 hover:text-gray-700  "
                            to="/"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="mr-9">
                          <Link
                            className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700 "
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
                            to="products"
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
        <section className="pt-6 pb-20 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center -m-4">
              <div className="w-full md:w-1/3 p-4">
                <img className="mx-auto rounded-3xl" src={logyanim} alt="" />
              </div>
              <div className="w-full md:flex-1 p-4">
                <div className="flex flex-col justify-center items-center p-8 h-full text-center bg-white rounded-3xl">
                  <div className="max-w-lg">
                    <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                      Best caption here
                    </span>
                    <h1 className="font-heading mb-6 text-5xl text-gray-900 font-black tracking-tight">
                      <span>Build better products </span>
                      <span className="text-blue-500">faster</span>
                      <span> than ever.</span>
                    </h1>
                    <p className="mb-8 text-xl font-bold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis venenatis volutpat velit, quis iaculis velit bibendum
                      a. Maecenas accumsan fermentum nisl.
                    </p>
                    <div className="flex flex-wrap justify-center -m-2">
                      <div className="w-full md:w-auto p-2">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                          href="#"
                        >
                          Get in Touch
                        </a>
                      </div>
                      <div className="w-full md:w-auto p-2">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-gray-50 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full"
                          href="#"
                        >
                          Watch Video
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 bg-white border border-gray-100 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 max-w-lg mx-auto text-center">
                  <h2 className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
                    Grow fast, with us
                  </h2>
                  <p className="text-gray-500 font-bold">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="w-full md:w-1/2 p-4">
                    <div className="py-14 px-8 text-center h-full bg-white border border-gray-100 rounded-3xl">
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
                    <div className="py-14 px-8 text-center h-full bg-white border border-gray-100 rounded-3xl">
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
        <section className="py-10 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 bg-white border border-gray-100 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 md:max-w-4xl mx-auto text-center">
                  <span className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">
                    Blog
                  </span>
                  <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                    Resources and stories center
                  </h2>
                  <p className="md:max-w-md mx-auto text-gray-500 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Malesuada tellus vestibulum, commodo pulvinar.
                  </p>
                </div>
                <div className="flex flex-wrap -m-4 mb-6">
                  <div className="w-full md:w-1/3 p-4">
                    <div className="h-full bg-gray-100 rounded-3xl">
                      <img
                        className="w-full"
                        src="zanrly-assets/images/blog/blog.png"
                        alt=""
                      />
                      <div className="p-8">
                        <a className="group inline-block mb-4" href="#">
                          <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                            You will never believe these bizarre truth of
                            travel.
                          </h3>
                        </a>
                        <p className="text-sm text-gray-500 font-bold">
                          Design process • 4 min read
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="h-full bg-gray-100 rounded-3xl">
                      <img
                        className="w-full"
                        src="zanrly-assets/images/blog/blog2.png"
                        alt=""
                      />
                      <div className="p-8">
                        <a className="group inline-block mb-4" href="#">
                          <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                            Five web design blogs you should be reading
                          </h3>
                        </a>
                        <p className="text-sm text-gray-500 font-bold">
                          Technology • 4 min read
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="h-full bg-gray-100 rounded-3xl">
                      <img
                        className="w-full"
                        src="zanrly-assets/images/blog/blog3.png"
                        alt=""
                      />
                      <div className="p-8">
                        <a className="group inline-block mb-4" href="#">
                          <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                            80 Best Virtual Reality Blogs and Websites
                          </h3>
                        </a>
                        <p className="text-sm text-gray-500 font-bold">
                          Inspiration • 4 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap md:justify-center -m-2">
                  <div className="w-full md:w-auto p-2">
                    <a
                      className="block w-full px-12 py-3.5 text-lg text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full"
                      href="#"
                    >
                      Read more News
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 bg-white border border-gray-100 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 md:max-w-4xl mx-auto text-center">
                  <span className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">
                    Blog
                  </span>
                  <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                    Resources and stories center
                  </h2>
                  <p className="md:max-w-md mx-auto text-gray-500 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Malesuada tellus vestibulum, commodo pulvinar.
                  </p>
                </div>
                <div className="max-w-5xl mx-auto">
                  <div className="flex flex-wrap -m-5 mb-10">
                    <div className="w-full p-5">
                      <div className="flex flex-wrap h-full bg-gray-100 overflow-hidden rounded-3xl">
                        <div className="w-full md:w-1/2">
                          <img
                            className="w-full h-full object-cover"
                            src="zanrly-assets/images/blog/blog4.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-1">
                          <div className="md:max-w-lg p-10 h-full">
                            <div className="flex flex-col justify-between h-full">
                              <div className="flex-initial mb-8">
                                <p className="mb-3 text-sm text-gray-500 font-bold">
                                  Design process • 4 min read
                                </p>
                                <a className="group inline-block mb-4" href="#">
                                  <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                                    You will never believe these bizarre truth
                                    of travel.
                                  </h3>
                                </a>
                                <p className="text-gray-500 font-bold">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Malesuada tellus vestibulum,
                                  commodo pulvinar.
                                </p>
                              </div>
                              <div className="flex-initial">
                                <div className="flex flex-wrap -m-2">
                                  <div className="w-full md:w-auto p-2">
                                    <a
                                      className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full"
                                      href="#"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap md:justify-center -m-2">
                  <div className="w-full md:w-auto p-2">
                    <a
                      className="block w-full px-12 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                      href="#"
                    >
                      Read more News
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 overflow-hidden bg-white">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 bg-white rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap -m-8">
                  <div className="w-full md:w-1/2 p-8">
                    <div className="flex flex-col justify-between md:max-w-sm h-full">
                      <div className="flex-initial mb-8">
                        <h2 className="font-heading mb-8 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
                          Affordable pricing plans
                        </h2>
                        <p className="text-gray-700 font-bold">
                          Amet minim mollit non deserunt ullamco an aliqua dolor
                          elit officia consequat duis.Amet minim mollit non
                          deserunt ullamco est sit aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-8">
                    <div className="flex flex-wrap -m-4">
                      <div className="w-full lg:w-1/2 p-4">
                        <div className="flex flex-col justify-between p-8 h-full bg-gray-100 rounded-3xl">
                          <div className="flex-initial mb-8">
                            <span className="inline-block mb-6 text-sm text-blue-500 font-bold uppercase tracking-widest">
                              PRODUCT
                            </span>
                            <h2 className="font-heading mb-2 text-4xl text-gray-900 font-black tracking-tight">
                              Oral screening module
                            </h2>
                            <p className="mb-6 text-sm text-gray-400 font-bold">
                              Best for medium business, owners, startups.
                            </p>
                            <div className="flex flex-wrap -m-2">
                              <div className="w-full p-2">
                                <a
                                  className="block w-full px-8 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                                  href="#"
                                >
                                  Purchase Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 p-4">
                        <div className="flex flex-col justify-between p-8 h-full bg-gray-100 rounded-3xl">
                          <div className="flex-initial mb-8">
                            <span className="inline-block mb-6 text-sm text-blue-500 font-bold uppercase tracking-widest">
                              PRODUCT
                            </span>
                            <h2 className="font-heading mb-2 text-4xl text-gray-900 font-black tracking-tight">
                              Eye screening module
                            </h2>
                            <p className="mb-6 text-sm text-gray-400 font-bold">
                              Best for medium business, owners, startups.
                            </p>
                            <div className="flex flex-wrap -m-2">
                              <div className="w-full p-2">
                                <a
                                  className="block w-full px-8 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                                  href="#"
                                >
                                  Purchase Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 overflow-hidden bg-blueGray-100">
          <div className="container mx-auto px-4">
            <h2 className="font-heading mb-10 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
              Meet our top tier customers
            </h2>
          </div>
          <div className="flex flex-nowrap justify-center items-center -m-4">
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand3.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand4.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand6.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand8.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand3.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand4.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand6.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-nowrap justify-center items-center -m-4">
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand7.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand5.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand2.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand9.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand7.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand5.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-64 p-4">
              <div className="py-24 px-8 h-full bg-white rounded-3xl">
                <img
                  className="mx-auto"
                  src="zanrly-assets/brands/brand2.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto">
          <h3 className="text-gray-900 font-black font-heading text-3xl md:text-4xl xl:text-5xl">
            Covered by
          </h3>
        </div>
        <section className="py-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="px-4 bg-white border border-gray-100 rounded-3xl">
              <div className="flex flex-wrap items-center py-11 -m-8">
                <div className="w-full sm:w-1/3 lg:w-1/6 p-8">
                  <img
                    className="mx-auto"
                    src="zanrly-assets/brands/brand3.svg"
                    alt=""
                  />
                </div>
                <div className="w-full sm:w-1/3 lg:w-1/6 p-8">
                  <img
                    className="mx-auto"
                    src="zanrly-assets/brands/brand4.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 bg-white border border-gray-100 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-lg mx-auto text-center">
                  <span className="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest">
                    Testimonials
                  </span>
                  <h2 className="font-heading mb-12 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
                    Our customer says
                  </h2>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="w-full md:w-1/3 p-4">
                    <div className="flex flex-col justify-between px-8 pt-12 pb-8 h-full text-center bg-gray-100 border border-gray-100 rounded-3xl">
                      <div className="flex-initial mb-8">
                        <img
                          className="mb-6 mx-auto rounded-full"
                          src="zanrly-assets/images/testimonials/avatar2.png"
                          alt=""
                        />
                        <p className="text-base text-gray-700 font-bold">
                          Had some issues where my site crashed and broke,
                          reached out to Shuffle Editor to see if they could
                          help me fix it.
                        </p>
                      </div>
                      <div className="flex-initial">
                        <h3 className="font-heading text-2xl text-gray-900 font-black">
                          Monica Johnson
                        </h3>
                        <p className="text-sm text-gray-500 font-bold">
                          @monicajonhson
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="flex flex-col justify-between px-8 pt-12 pb-8 h-full text-center bg-gray-100 border border-gray-100 rounded-3xl">
                      <div className="flex-initial mb-8">
                        <img
                          className="mb-6 mx-auto rounded-full"
                          src="zanrly-assets/images/testimonials/avatar2.png"
                          alt=""
                        />
                        <p className="text-base text-gray-700 font-bold">
                          Had some issues where my site crashed and broke,
                          reached out to Shuffle Editor to see if they could
                          help me fix it.
                        </p>
                      </div>
                      <div className="flex-initial">
                        <h3 className="font-heading text-2xl text-gray-900 font-black">
                          Monica Johnson
                        </h3>
                        <p className="text-sm text-gray-500 font-bold">
                          @monicajonhson
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="flex flex-col justify-between px-8 pt-12 pb-8 h-full text-center bg-gray-100 border border-gray-100rounded-3xl">
                      <div className="flex-initial mb-8">
                        <img
                          className="mb-6 mx-auto rounded-full"
                          src="zanrly-assets/images/testimonials/avatar2.png"
                          alt=""
                        />
                        <p className="text-base text-gray-700 font-bold">
                          Had some issues where my site crashed and broke,
                          reached out to Shuffle Editor to see if they could
                          help me fix it.
                        </p>
                      </div>
                      <div className="flex-initial">
                        <h3 className="font-heading text-2xl text-gray-900 font-black">
                          Monica Johnson
                        </h3>
                        <p className="text-sm text-gray-500 font-bold">
                          @monicajonhson
                        </p>
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
            <div className="py-16 px-8 md:px-16 bg-gradient-red rounded-3xl">
              <div className="flex flex-wrap items-center -m-4">
                <div className="w-full md:w-1/2 p-4">
                  <h2 className="font-heading text-4xl md:text-5xl text-white font-black tracking-tight">
                    Ready to dive in? Let’s start together.
                  </h2>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="flex flex-wrap md:justify-end -m-2">
                    <div className="w-auto p-2">
                      <a
                        className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full"
                        href="#"
                      >
                        Get Started
                      </a>
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
                    <p className="text-xl font-bold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis venenatis volutpat velit, quis iaculis velit
                      bibendum.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 p-8">
                    <ul className="md:max-w-max ml-auto">
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
                    <ul className="md:max-w-max ml-auto">
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
                          <img
                            src="zanrly-assets/images/footers/fb.svg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
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
