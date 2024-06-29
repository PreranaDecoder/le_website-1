import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import logo from "../assets/img/LogoFree.svg";
import navbarLogo from "../assets/img/NavbarLogo.png";

const meta = {
  title: "Logy.AI - products",
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
                            className="bg-gray-50 px-6 py-2 rounded-full inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
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
                            <img
                              src={navbarLogo}
                              style={{ width: "90px" }}
                              alt=""
                            />
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
                  <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold tracking-tight">
                    Our Products
                  </h2>
                  <p className="text-gray-500 font-normal text-2xl">
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
                            <h2 className="font-heading mb-4 text-4xl text-gray-900 font-bold tracking-tight">
                              Oral screening module
                            </h2>
                            <div className="flex-initial mb-8">
                              <h4 className="font-heading mb-4 text-gray-900 font-bold">
                                What is this?
                              </h4>
                              <p className="text-gray-700 font-normal text-xl">
                                Accessible Oral Health Solutions for Home and
                                Satellite Camps using Smartphones
                              </p>
                            </div>

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
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 p-4">
                        <div className="flex flex-col justify-between p-8 h-full bg-gray-100 rounded-3xl">
                          <div className="flex-initial mb-8">
                            <span className="inline-block mb-6 text-sm text-blue-500 font-bold uppercase tracking-widest">
                              PRODUCT
                            </span>
                            <h2 className="font-heading mb-4 text-4xl text-gray-900 font-bold tracking-tight">
                              Eye screening module
                            </h2>
                            <div className="flex-initial mb-8">
                              <h4 className="font-heading mb-4 text-gray-900 font-bold">
                                What is this?
                              </h4>
                              <p className="text-gray-700 font-normal text-xl">
                                Accessible Eye Care Solutions for Home and
                                Satellite Camps using Smartphones
                              </p>
                            </div>
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
                        </div>
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
