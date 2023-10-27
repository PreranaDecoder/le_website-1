import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import logo from "../assets/img/LogoFree.svg";
import logyanim from "../assets/zanrly-assets/images/headers/logyanim.gif";
import Clients from "../assets/components/clients";
import edex from "../assets/img/edexlive.png";
import dainik from "../assets/img/dainikbhaskar.png";

import cs1 from "../assets/zanrly-assets/images/blog/blog.png";
import cs2 from "../assets/zanrly-assets/images/blog/blog2.png";
import cs3 from "../assets/zanrly-assets/images/blog/blog3.png";
import articleimg from "../assets/zanrly-assets/images/blog/blog4.png";

import apollo_t from "../assets/img/Apollo-Clinic_t.png";
import colgate_t from "../assets/img/colgate_t.png";
import sharp_t from "../assets/img/sharpsight_t.png";

const meta = {
  title: "Logy.AI",
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
            <div className="">
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
        <section className="pt-6 pb-10 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center -m-4">
              <div className="w-full md:w-1/3 p-4">
                <img className="mx-auto rounded-3xl" src={logyanim} alt="" />
              </div>
              <div className="w-full md:flex-1 p-4">
                <div className="flex flex-col justify-center items-center p-8 h-full text-center bg-white rounded-3xl">
                  <div className="max-w-lg">
                    <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                      We are hiring 🔥🔥
                    </span>
                    <h1 className="font-heading mb-6 text-4xl text-gray-900 font-black tracking-tight">
                      <span>
                        First-Level Health Checks & Care-Coordination, Made Easy
                        with{" "}
                      </span>
                      <span className="text-blue-500">AI</span>
                    </h1>
                    <p className="mb-8 text-xl font-bold">
                      Our Software-As-A-Medical-Device AI tool provides
                      solutions that are clinically validated in India and
                      Africa. Our proprietary AI models are also patented for
                      90%+ accuracy.
                    </p>
                    <div className="flex flex-wrap justify-center -m-2">
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-10  overflow-hidden bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 bg-white border border-gray-100 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 max-w-lg mx-auto text-center">
                  <h2 className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
                    Scale of impact
                  </h2>
                  <p className="text-gray-500 font-bold">
                    Impact of Logy.AI in it's Journey of changing lives
                  </p>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="w-full md:w-1/3 p-4">
                    <div className="py-14 px-8 text-center h-full bg-white border border-gray-100 rounded-3xl">
                      <div className="md:max-w-xs mx-auto">
                        <h2 className="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-gray-900 font-black tracking-tight">
                          <span className="text-transparent bg-clip-text bg-gradient-green-dark">
                            2X
                          </span>
                        </h2>
                        <h3 className="font-heading mb-3.5 text-xl text-gray-900 font-bold">
                          ROI Improvement
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="py-14 px-8 text-center h-full bg-gray-50 border border-gray-100 rounded-3xl">
                      <div className="md:max-w-xs mx-auto">
                        <h2 className="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-gray-900 font-black tracking-tight">
                          <span className="text-transparent bg-clip-text bg-gradient-orange">
                            200+
                          </span>
                        </h2>
                        <h3 className="font-heading mb-3.5 text-xl text-gray-900 font-bold">
                          Clinics
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="py-14 px-8 text-center h-full bg-white border border-gray-100 rounded-3xl">
                      <div className="md:max-w-xs mx-auto">
                        <h2 className="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-gray-900 font-black tracking-tight">
                          <span className="text-transparent bg-clip-text bg-gradient-green-dark">
                            {">"}90%
                          </span>
                        </h2>
                        <h3 className="font-heading mb-3.5 text-xl text-gray-900 font-bold">
                          Accuracy
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="w-full md:w-1/3 p-4">
                    <div className="py-14 px-8 text-center h-full bg-gray-50 border border-gray-100 rounded-3xl">
                      <div className="md:max-w-xs mx-auto">
                        <h2 className="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-gray-900 font-black tracking-tight">
                          <span className="text-transparent bg-clip-text bg-gradient-orange">
                            300K+
                          </span>
                        </h2>
                        <h3 className="font-heading mb-3.5 text-xl text-gray-900 font-bold">
                          Lives Touched
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="py-14 px-8 text-center h-full bg-white border border-gray-100 rounded-3xl">
                      <div className="md:max-w-xs mx-auto">
                        <h2 className="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-gray-900 font-black tracking-tight">
                          <span className="text-transparent bg-clip-text bg-gradient-green-dark">
                            20%
                          </span>
                        </h2>
                        <h3 className="font-heading mb-3.5 text-xl text-gray-900 font-bold">
                          Increase in Patient Footfall
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="py-14 px-8 text-center h-full bg-gray-50 border border-gray-100 rounded-3xl">
                      <div className="md:max-w-xs mx-auto">
                        <h2 className="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-gray-900 font-black tracking-tight">
                          <span className="text-transparent bg-clip-text bg-gradient-orange">
                            50%
                          </span>
                        </h2>
                        <h3 className="font-heading mb-3.5 text-xl text-gray-900 font-bold">
                          Lowered Healthcare Cost
                        </h3>
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
            <div className="py-16 px-8 bg-white border border-gray-100 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 md:max-w-4xl mx-auto text-center">
                  <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                    Case Studies
                  </h2>
                  <p className="md:max-w-md mx-auto text-gray-500 font-bold">
                    Making a difference in the community. Read the studies.
                  </p>
                </div>
                <div className="flex flex-wrap -m-4 mb-6">
                  <div className="w-full md:w-1/3 p-4">
                    <div className="h-full bg-gray-100 rounded-3xl">
                      <img className="w-full" src={cs1} alt="" />
                      <div className="p-8">
                        <Link
                          className="group inline-block mb-4"
                          to="/cs_kenya"
                        >
                          <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                            Logy.AI eye screening solution: Vidisha 5G use cases
                            pilot launch on 13th January 2023
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-500 font-bold">
                          Case Study • 4 min read
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="h-full bg-gray-100 rounded-3xl">
                      <img className="w-full" src={cs2} alt="" />
                      <div className="p-8">
                        <Link
                          className="group inline-block mb-4"
                          to="/cs_kenya"
                        >
                          <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                            Logy.AI’s Collaboration with Colgate Kenya
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-500 font-bold">
                          Case Study • 4 min read
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="h-full bg-gray-100 rounded-3xl">
                      <img className="w-full" src={cs3} alt="" />
                      <div className="p-8">
                        <Link
                          className="group inline-block mb-4"
                          to="/cs_kenya"
                        >
                          <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                            Logy.AI 5G digital health launch at Vidisha, Madhya
                            Pradesh
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-500 font-bold">
                          Case Study • 4 min read
                        </p>
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
            <div className="py-16 px-8 bg-white border border-gray-100 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 md:max-w-4xl mx-auto text-center">
                  <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                    Articles and Publications
                  </h2>
                  <p className="md:max-w-md mx-auto text-gray-500 font-bold">
                    What are the newest publications and findings about Logy.AI?
                    Stay up-to-date here.
                  </p>
                </div>
                <div className="max-w-5xl mx-auto">
                  <div className="flex flex-wrap -m-5 mb-10">
                    <div className="w-full p-5">
                      <div className="flex flex-wrap h-full bg-gray-100 overflow-hidden rounded-3xl">
                        <div className="w-full md:w-1/2">
                          <img
                            className="w-full h-full object-cover"
                            src={articleimg}
                            alt=""
                          />
                        </div>
                        <div className="flex-1">
                          <div className="md:max-w-lg p-10 h-full">
                            <div className="flex flex-col justify-between h-full">
                              <div className="flex-initial mb-8">
                                <p className="mb-3 text-sm text-gray-500 font-bold">
                                  Article • 4 min read
                                </p>
                                <a className="group inline-block mb-4" href="#">
                                  <h3 className="font-heading text-2xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
                                    Teeth talk: This Hyderabad start-up is using
                                    AI and WhatsApp to bring oral hygiene to the
                                    fore
                                  </h3>
                                </a>
                                <p className="text-gray-500 font-bold">
                                  Logy.AI is a start-up that is using the power
                                  of WhatsApp and Artificial Intelligence to
                                  step up oral hygiene efforts. We get a demo to
                                  understand how exactly it works and we are
                                  thrilled indeed.
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
                    <Link
                      className="block w-full px-12 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                      to="/articles"
                    >
                      Read more Articles
                    </Link>
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
                          Our Solutions
                        </h2>
                        <p className="text-gray-700 font-bold">
                          Our company offers a cutting-edge solution in the form
                          of a Software as a Medical Device (SAMD) AI tool that
                          enables healthcare providers to rapidly assess various
                          conditions, with a current focus on eye and oral
                          diseases.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-8">
                    <div className="flex flex-wrap -m-4">
                      <div className="w-full lg:w-1/2 p-4">
                        <div className="flex flex-col justify-between p-8 h-full bg-gray-50 rounded-3xl">
                          <div className="flex-initial mb-8">
                            <span className="inline-block mb-6 text-sm text-blue-500 font-bold uppercase tracking-widest">
                              PRODUCT
                            </span>
                            <h2 className="font-heading mb-2 text-4xl text-gray-900 font-black tracking-tight">
                              Oral screening module
                            </h2>
                            <br />
                            <div className="flex flex-wrap -m-2">
                              <div className="w-full p-2">
                                <Link
                                  className="block w-full px-8 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                                  to="/oral"
                                >
                                  Explore Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 p-4">
                        <div className="flex flex-col justify-between p-8 h-full bg-gray-50 rounded-3xl">
                          <div className="flex-initial mb-8">
                            <span className="inline-block mb-6 text-sm text-blue-500 font-bold uppercase tracking-widest">
                              PRODUCT
                            </span>
                            <h2 className="font-heading mb-2 text-4xl text-gray-900 font-black tracking-tight">
                              Eye screening module
                            </h2>
                            <br />
                            <div className="flex flex-wrap -m-2">
                              <div className="w-full p-2">
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
        <section className="py-10 overflow-hidden bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-heading mb-10 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
              Serving clients globally
            </h2>
          </div>
        </section>
        <Clients />
        <section className="py-10 overflow-hidden bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-heading mb-10 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
              Covered by
            </h2>
          </div>
          <div className="container mx-auto px-4">
            <div className="px-4 bg-white w-fit border border-gray-100 rounded-3xl">
              <div className="flex flex-wrap items-center py-11 -m-8 ">
                <div className="w-full sm:w-1/3 lg:w-1/6 p-8">
                  <img
                    className="mx-auto"
                    style={{ padding: "10%" }}
                    src={edex}
                    alt=""
                  />
                </div>
                <div className="w-full sm:w-1/3 lg:w-1/6 p-8">
                  <img
                    className="mx-auto"
                    style={{ padding: "10%" }}
                    src={dainik}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-10 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 bg-white border border-gray-100 rounded-3xl">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-lg mx-auto text-center">
                  <span className="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest">
                    Testimonials
                  </span>
                  <h2 className="font-heading mb-12 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
                    Hear from Our Clients
                  </h2>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="w-full md:w-1/3 p-4">
                    <div className="flex flex-col justify-between px-8 pt-12 pb-8 h-full text-center bg-gray-100 border border-gray-100 rounded-3xl">
                      <div className="flex-initial mb-8">
                        <img
                          className="mb-6 mx-auto "
                          src={apollo_t}
                          alt=""
                          style={{ width: "200px" }}
                        />
                        <p className="text-base text-gray-700 font-bold">
                          Logy.AI's AI-driven Eye Screening Tool delivers quick,
                          reliable eye health assessments via smartphones,
                          aligning with top-notch healthcare standards.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="flex flex-col justify-between px-8 pt-12 pb-8 h-full text-center bg-gray-100 border border-gray-100 rounded-3xl">
                      <div className="flex-initial mb-8">
                        <img
                          className="mb-6 mx-auto rounded-full"
                          src={sharp_t}
                          alt=""
                          style={{ width: "200px" }}
                        />
                        <p className="text-base text-gray-700 font-bold">
                          Logy.AI's AI-driven Eye Screening Module optimizes
                          ophthalmic diagnostics, ensuring efficiency and
                          accuracy in eye health evaluations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="flex flex-col justify-between px-8 pt-12 pb-8 h-full text-center bg-gray-100 border border-gray-100 rounded-3xl">
                      <div className="flex-initial mb-8">
                        <img
                          className="mb-6 mx-auto rounded-full"
                          src={colgate_t}
                          alt=""
                          style={{ width: "200px" }}
                        />
                        <p className="text-base text-gray-700 font-bold">
                          It's Al-powered Oral Screening ensures swift and
                          accurate dental assessments through smartphones and
                          WhatsApp. Elevating oral health accessibility.
                        </p>
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
            <div className="py-16 px-8 md:px-16 bg-blue-500 rounded-3xl">
              <div className="flex flex-wrap items-center -m-4">
                <div className="w-full md:w-3/5 p-4">
                  <h2 className="font-heading text-4xl md:text-5xl text-white font-black tracking-tight">
                    Join the growing number of healthcare providers who trust
                    Logy.AI
                  </h2>
                </div>
                <div className="w-full md:w-2/5 p-4">
                  <div className="flex flex-wrap md:justify-end -m-2">
                    <div className="w-auto p-2">
                      <Link
                        className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full"
                        to="/contact"
                      >
                        Get in Touch
                      </Link>
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
