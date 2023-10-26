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

export default function Products() {
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
                        <img
                          src={logo}
                          style={{
                            width: "100px",
                            transform: "translateY(3px) translateX(10px)",
                          }}
                          alt=""
                        />
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
                            className=" inline-block text-sm font-bold text-gray-900 hover:text-gray-700 "
                            to="/about"
                          >
                            About us
                          </Link>
                        </li>
                        <li className="mr-9">
                          <Link
                            className="bg-gray-50 px-6 py-2 rounded-full inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
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
        <section className="pt-6 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center -m-4">
              <div className="w-full md:w-auto p-4" />
              <div className="w-full md:flex-1 p-4"></div>
            </div>
          </div>
        </section>
        <section className="overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative py-16 px-8 bg-white overflow-hidden rounded-3xl">
              <div className="absolute top-0 left-1/2 min-w-max transform -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="md:max-w-xl mx-auto text-center">
                  <span className="inline-block mb-5 text-sm text-blue-500 font-bold uppercase tracking-widest">
                    FROM THE HOUSE OF LOGY.AI
                  </span>
                  <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                    Our Products
                  </h2>
                  <p className="text-gray-500 font-bold">
                    Our company offers a cutting-edge solution in the form of a
                    Software as a Medical Device (SAMD) AI tool that enables
                    healthcare providers to rapidly assess various conditions,
                    with a current focus on eye and oral diseases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="overflow-hidden bg-white">
          <div className="container mx-auto px-4">
            <div className="pt-2 pb-12 px-8 bg-white rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap -m-8">
                  <div className="w-full p-8">
                    <div className="flex flex-wrap -m-4">
                      <div className="w-full lg:w-1/2 p-4">
                        <div className="flex flex-col justify-between p-8 h-full bg-gray-100 rounded-3xl">
                          <div className="flex-initial mb-8">
                            <span className="inline-block mb-6 text-sm text-blue-500 font-bold uppercase tracking-widest">
                              PRODUCT
                            </span>
                            <h2 className="font-heading mb-4 text-4xl text-gray-900 font-black tracking-tight">
                              Oral screening module
                            </h2>

                            <div className="flex flex-wrap -m-2">
                              <div className="p-2">
                                <Link
                                  className="block px-8 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                                  to="/oral"
                                >
                                  Explore now
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="flex-initial">
                            <h4 className="font-heading mb-4 text-gray-900 font-bold">
                              What is this?
                            </h4>
                            <p className="text-gray-500 font-bold">
                              Accessible Oral Health Solutions for Home and
                              Satellite Camps using Smartphones
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 p-4">
                        <div className="flex flex-col justify-between p-8 h-full bg-gray-100 rounded-3xl">
                          <div className="flex-initial mb-8">
                            <span className="inline-block mb-6 text-sm text-blue-500 font-bold uppercase tracking-widest">
                              PRODUCT
                            </span>
                            <h2 className="font-heading mb-4 text-4xl text-gray-900 font-black tracking-tight">
                              Eye screening module
                            </h2>

                            <div className="flex flex-wrap -m-2">
                              <div className="p-2">
                                <Link
                                  className="block w-full px-8 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                                  to="/eye"
                                >
                                  Explore Now
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="flex-initial">
                            <h4 className="font-heading mb-4 text-gray-900 font-bold">
                              What is this?
                            </h4>
                            <p className="text-gray-500 font-bold">
                              Accessible Eye Care Solutions for Home and
                              Satellite Camps using Smartphones
                            </p>
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
        <section className="pb-10 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 bg-white rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap -m-8 mb-8">
                  <div className="w-full md:w-1/3 p-8">
                    <img
                      className="mb-6"
                      style={{ width: "120px" }}
                      src={logo}
                      alt=""
                    />
                    <p className="text-xl font-bold">
                      Experience the power of AI-powered healthcare platform
                      through Logy.AI’s proprietary and clinically validated
                      solutions. Our tool leverages smartphones and WhatsApp and
                      can be used to improve care coordination, prevent
                      avoidable diseases and provide appropriate care for
                      patients worldwide.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 p-8">
                    <ul className="md:max-w-max ">
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
                          Products
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                          href="#"
                        >
                          Articles
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                          href="#"
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <a
                          className="inline-block text-3xl text-gray-700 hover:text-blue-500 font-black tracking-tight"
                          href="#"
                        >
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/3 p-8">
                    <ul className="md:max-w-max ">
                      <li className="mb-4">
                        <a
                          className="inline-block text-gray-500 hover:text-gray-600 font-bold text-2xl"
                          href="#"
                        >
                          Our Locations
                        </a>
                      </li>
                      <li className="mb-4">LOGY AI HEALTH INC</li>
                      <li className="mb-4">
                        <div className="flex">
                          <div style={{ marginRight: "8px" }}>
                            <i
                              className="fa-solid fa-location-dot"
                              style={{ color: "#518df5" }}
                            ></i>
                          </div>
                          <div>
                            {" "}
                            <span>
                              919, North Market Street,
                              <br />
                              Ste 950, Wilmington
                              <br />
                              Delaware - USA 19801
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="mb-4">
                        <div className="flex">
                          <div style={{ marginRight: "8px" }}>
                            <i
                              className="fa-solid fa-location-dot"
                              style={{ color: "#518df5" }}
                            ></i>
                          </div>
                          <div>
                            {" "}
                            <span>
                              D Labs Incubator Association,
                              <br />
                              ISB Campus, Gachibowli,
                              <br />
                              Hyderabad - India, 500111
                            </span>
                          </div>
                        </div>
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
