import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import navbarLogo from "../assets/img/NavbarLogo.png";
import logo from "../assets/img/LogoFree.svg";
import blog4 from "../assets/zanrly-assets/images/blog/blog4.png";
import blog5 from "../assets/zanrly-assets/images/blog/blog5.png";
import blog6 from "../assets/img/articleImage3.jpeg";

const meta = {
  title: "Logy.AI - articles",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Articles() {
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
                            className="inline-block px-6 text-sm font-bold text-gray-900 hover:text-gray-700 "
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
                            className="bg-gray-50 px-6 py-2 rounded-full inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
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
                            to="/products"
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

        <section className="pb-12 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="px-8 bg-white rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 md:max-w-4xl mx-auto text-center pt-12">
                  <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold tracking-tight">
                    Articles and Publications
                  </h2>

                  <p className="md:max-w-4xl mx-auto text-gray-500 font-normal text-2xl">
                    Read the Articles and publications related to Logy.AI
                  </p>
                </div>
                <div className="max-w-5xl mx-auto">
                  <div className="flex flex-wrap -m-5 mb-10">
                    <div className="w-full p-5">
                      <div className="flex flex-wrap h-full bg-gray-100 overflow-hidden rounded-3xl">
                        <div className="w-full md:w-1/2">
                          <img
                            className="w-full h-full object-cover"
                            src={blog6}
                            alt=""
                          />
                        </div>
                        <div className="flex-1">
                          <div className="md:max-w-lg p-10 h-full">
                            <div className="flex flex-col justify-between h-full">
                              <div className="flex-initial mb-8">
                                <p className="mb-3 text-sm text-gray-500 font-bold">
                                  www.ijmedicine.com • 4 min read
                                </p>
                                <a
                                  className="group inline-block mb-4"
                                  href="https://www.ijmedicine.com/index.php/ijam/article/view/3967"
                                  target="#"
                                >
                                  <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-bold">
                                    Clinical validation of artificial
                                    intelligence-based cataract screening
                                    solution with smartphone images (Logy AI
                                    cataract screening module)
                                  </h3>
                                </a>
                              </div>
                              <div className="flex-initial">
                                <div className="flex flex-wrap -m-2">
                                  <div className="w-full md:w-auto p-2">
                                    <a
                                      className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full"
                                      href="https://www.ijmedicine.com/index.php/ijam/article/view/3967"
                                      target="#"
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
                    <div className="w-full p-5">
                      <div className="flex flex-wrap h-full bg-gray-100 overflow-hidden rounded-3xl">
                        <div className="w-full md:w-1/2">
                          <img
                            className="w-full h-full object-cover"
                            src={blog4}
                            alt=""
                          />
                        </div>
                        <div className="flex-1">
                          <div className="md:max-w-lg p-10 h-full">
                            <div className="flex flex-col justify-between h-full">
                              <div className="flex-initial mb-8">
                                <p className="mb-3 text-sm text-gray-500 font-bold">
                                  edexlive.com • 4 min read
                                </p>
                                <a
                                  className="group inline-block mb-4"
                                  href="https://www.edexlive.com/happening/2020/dec/14/teeth-talk-this-hyderabad-start-up-is-using-ai-and-whatsapp-to-bring-oral-hygiene-to-the-fore-16582.html"
                                  target="#"
                                >
                                  <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-bold">
                                    Teeth talk: This Hyderabad start-up is using
                                    AI and WhatsApp to bring oral hygiene to the
                                    fore
                                  </h3>
                                </a>
                              </div>
                              <div className="flex-initial">
                                <div className="flex flex-wrap -m-2">
                                  <div className="w-full md:w-auto p-2">
                                    <a
                                      className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full"
                                      href="https://www.edexlive.com/happening/2020/dec/14/teeth-talk-this-hyderabad-start-up-is-using-ai-and-whatsapp-to-bring-oral-hygiene-to-the-fore-16582.html"
                                      target="#"
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
                    <div className="w-full p-5">
                      <div className="flex flex-wrap h-full bg-gray-100 overflow-hidden rounded-3xl">
                        <div className="w-full md:w-1/2">
                          <img
                            className="w-full h-full object-cover"
                            src={blog5}
                            alt=""
                          />
                        </div>
                        <div className="flex-1">
                          <div className="md:max-w-lg p-10 h-full">
                            <div className="flex flex-col justify-between h-full">
                              <div className="flex-initial mb-8">
                                <p className="mb-3 text-sm text-gray-500 font-bold">
                                  cmp.smu.edu.sg • 4 min read
                                </p>
                                <a
                                  className="group inline-block mb-4"
                                  href="https://cmp.smu.edu.sg/ami/article/20230707/beyond-single-quadrant"
                                  target="#"
                                >
                                  <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-bold">
                                    Beyond a Single Quadrant
                                  </h3>
                                </a>
                              </div>
                              <div className="flex-initial">
                                <div className="flex flex-wrap -m-2">
                                  <div className="w-full md:w-auto p-2">
                                    <a
                                      className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full"
                                      href="https://cmp.smu.edu.sg/ami/article/20230707/beyond-single-quadrant"
                                      target="#"
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
                  <div className="w-full md:w-auto p-2" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
