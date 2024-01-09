import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import logo from "../assets/img/LogoFree.svg";
import eyeHead from "../assets/img/eyeHead.png";

import drAgg from "../assets/img/Dr. Agarwals.png";
import apollo from "../assets/img/Apollo-Clinic.png";
import sharpsight from "../assets/img/sharpsight.png";
import pristyn from "../assets/img/pristynWhiteBg.png";

import eyescans from "../assets/img/eyescans.svg";
import wtsapp from "../assets/img/wtsapp.svg";
import time from "../assets/img/time.svg";
import accuracy from "../assets/img/accuracy.svg";

import Faq from "./faq";

const meta = {
  title: "Logy.AI - eye",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Eye() {
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
                        <li className="">
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
        <section className="bg-gray-50 overflow-hidden pb-2">
          <div className="container mx-auto px-4">
            <div className="mb-6"></div>
            <div className="mb-8 p-8 bg-white rounded-3xl">
              <div className="flex flex-wrap lg:items-center -m-8">
                <div className="w-full md:w-1/2 p-8">
                  <div className="md:max-w-lg mx-auto">
                    <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                      POWERED BY LOGY.AI
                    </span>
                    <h1 className="font-heading mb-4 text-5xl text-gray-900 font-bold tracking-tight">
                      <span>Eye Screening Solution&nbsp;</span>
                      <span className="text-transparent bg-clip-text bg-gradient-orange">
                        faster
                      </span>
                      <span> than ever.</span>
                    </h1>
                    <p className="mb-6  font-normal text-2xl">
                      Accessible Eye Care Solutions for Home and Satellite Camps
                      using Smartphones
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <div className="max-w-max mx-auto md:mr-0 bg-white overflow-hidden rounded-3xl">
                    <img className="mx-auto" src={eyeHead} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8 py-11 bg-white rounded-3xl">
              <div className="flex flex-wrap justify-center sm:justify-around -m-2">
                <div className="w-full sm:w-auto p-2">
                  <img
                    className="mx-auto"
                    src={drAgg}
                    alt=""
                    style={{ width: "148px" }}
                  />
                </div>
                <div className="w-full sm:w-auto p-2">
                  <img
                    className="mx-auto"
                    src={apollo}
                    alt=""
                    style={{ width: "148px" }}
                  />
                </div>
                <div className="w-full sm:w-auto p-2">
                  <img
                    className="mx-auto"
                    src={sharpsight}
                    alt=""
                    style={{ width: "148px" }}
                  />
                </div>
                <div className="w-full sm:w-auto p-2">
                  <img
                    className="mx-auto"
                    src={pristyn}
                    style={{ width: "148px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-0 pb-8x bg-gray-50 overflow-hidden pb-6">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
                <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
                  <div className="flex flex-wrap justify-between h-full">
                    <div className="w-full">
                      <div className="flex items-center justify-between -m-2">
                        <div className="w-auto p-2">
                          <a className="inline-block" href="#">
                            <img
                              src="zanrly-assets/logos/zanrly-logo.svg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="w-auto p-2">
                          <a className="inline-block navbar-burger" href="#">
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
                  </div>
                </nav>
              </div>
            </div>
            <div className="flex flex-wrap justify-center -m-4">
              <div className="w-full md:flex-1 p-4">
                <div className="flex flex-col justify-center items-center p-8 h-full text-center rounded-3xl">
                  <div className="w-full">
                    <h1 className="font-heading mb-6 text-5xl text-gray-900 font-bold text-start tracking-tight">
                      <span>One of it's kind </span>
                      <span className="text-blue-500">solution</span>
                      <span> for Eye screening.</span>
                    </h1>
                    <p className="mb-4 font-normal text-2xl text-start">
                      The logy.AI Eye Screening Solution helps in the early
                      prediction of cataract diseases and provides early
                      warnings for pre-diabetes. Clinically validated in India
                      and Africa, this state-of-the-art AI solution demonstrates
                      an impressive accuracy rate of over 90%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-12 pt-2 bg-gray-50 overflow-hidden ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="stats">
                <img
                  src={eyescans}
                  className="-m-4"
                  style={{ width: "20%", marginLeft: "auto" }}
                />
                <div className="flex flex-col justify-between p-6  lg:pt-12 bg-white  border border-gray-100 rounded-3xl">
                  <h2 className="font-heading text-2xl text-gray-900 font-bold tracking-tight">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-blue">
                      10,000+
                    </span>
                    <span className="font-normal"> Tests Completed</span>
                  </h2>
                </div>
              </div>
              <div className="stats">
                <img
                  src={time}
                  className="-m-4"
                  style={{ width: "20%", marginLeft: "auto" }}
                />
                <div className="flex flex-col justify-between p-6  lg:pt-12 bg-white  border border-gray-100 rounded-3xl">
                  <h2 className="font-heading text-2xl text-gray-900 font-bold tracking-tight">
                    <span className="font-normal">Takes less than </span>
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-blue">
                      2
                    </span>
                    <span className="font-normal"> minutes</span>
                  </h2>
                </div>
              </div>
              {/* <div className="stats">
                <div className="flex flex-col justify-end p-6 pt-20 lg:pt-28 bg-white h-full border border-gray-100 rounded-3xl">
                  <h2 className="font-heading text-2xl text-gray-900 font-bold tracking-tight">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-aqua">
                      Safe
                    </span>
                    <span> and </span>
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-aqua">
                      Secure
                    </span>
                    <span> tests</span>
                  </h2>
                </div>
              </div> */}
              <div className="stats">
                <img
                  src={accuracy}
                  className="-m-4"
                  style={{ width: "20%", marginLeft: "auto" }}
                />
                <div className="flex flex-col justify-between p-6  lg:pt-12 bg-white  border border-gray-100 rounded-3xl">
                  <h2 className="font-heading text-2xl text-gray-900 font-bold tracking-tight">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-blue">
                      90% +
                    </span>
                    <span className="font-normal"> Accurate Results </span>
                  </h2>
                </div>
              </div>
              {/* <div className="stats">
                <div className="flex flex-col justify-end p-6 pt-20 lg:pt-28 bg-white h-full border border-gray-100 rounded-3xl">
                  <h2 className="font-heading text-2xl text-gray-900 font-bold tracking-tight">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-aqua">
                      Patent
                    </span>
                    <span> Secured </span>
                  </h2>
                </div>
              </div> */}
              <div className="stats">
                <img
                  src={wtsapp}
                  className="-m-4 "
                  style={{ width: "20%", marginLeft: "auto" }}
                />
                <div className="flex flex-col justify-between p-6  lg:pt-12 bg-white  border border-gray-100 rounded-3xl">
                  <h2 className="font-heading text-2xl text-gray-900 font-bold tracking-tight">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-blue">
                      Whatsapp
                    </span>
                    <span className="font-normal"> based Application </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-6 overflow-hidden bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap lg:items-center -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-md">
                  <span className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">
                    How it works
                  </span>
                  <h2 className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-bold tracking-tight">
                    Step by Step guide on how to use the solution
                  </h2>

                  <div className="flex flex-wrap -m-2"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="relative py-16 px-8 bg-white overflow-hidden rounded-3xl">
                  <div className="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute bg-gradient-radial-white w-full h-full" />
                    <img src="zanrly-assets/images/pattern-gray.png" alt="" />
                  </div>
                  <div className="relative max-w-md mx-auto">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-full p-3">
                        <div className="flex flex-wrap -m-4">
                          <div className="flex flex-col items-center w-auto p-4">
                            <div className="flex items-center justify-center mb-6 w-16 h-16 text-xl text-gray-900 font-bold bg-gray-100 rounded-full">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                  fill="#3B82F6"
                                />
                                <path
                                  d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                  fill="#3B82F6"
                                />
                                <path
                                  d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                  fill="#3B82F6"
                                />
                              </svg>
                            </div>
                            <div className="w-px h-24 bg-gray-200" />
                          </div>
                          <div className="flex-1 p-4">
                            <h3 className="font-heading mb-3 text-2xl text-gray-900 font-bold">
                              Step 1
                            </h3>
                            <p className="text-gray-700 font-normal text-2xl">
                              The Patient Says Hi to Logy.AI bot on WhatsApp
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap -m-4">
                          <div className="flex flex-col items-center w-auto p-4">
                            <div className="flex items-center justify-center mb-6 w-16 h-16 text-xl text-gray-900 font-bold bg-gray-100 rounded-full">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                  fill="#3B82F6"
                                />
                                <path
                                  d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                  fill="#3B82F6"
                                />
                                <path
                                  d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                  fill="#3B82F6"
                                />
                              </svg>
                            </div>
                            <div className="w-px h-24 bg-gray-200" />
                          </div>
                          <div className="flex-1 p-4">
                            <h3 className="font-heading mb-3 text-2xl text-gray-900 font-bold">
                              Step 2
                            </h3>
                            <p className="text-gray-700 font-normal text-2xl">
                              They are prompted to share their Name, Age & Other
                              Details
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap -m-4">
                          <div className="flex flex-col items-center w-auto p-4">
                            <div className="flex items-center justify-center mb-6 w-16 h-16 text-xl text-gray-900 font-bold bg-gray-100 rounded-full">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                  fill="#3B82F6"
                                />
                                <path
                                  d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                  fill="#3B82F6"
                                />
                                <path
                                  d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                  fill="#3B82F6"
                                />
                              </svg>
                            </div>
                            <div className="md:hidden w-px h-24 bg-gray-200" />
                          </div>
                          <div className="flex-1 p-4">
                            <h3 className="font-heading mb-3 text-2xl text-gray-900 font-bold">
                              Step 3
                            </h3>
                            <p className="text-gray-700 font-normal text-2xl">
                              They share an image of their eyes
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap -m-4">
                          <div className="flex flex-col items-center w-auto p-4">
                            <div className="flex items-center justify-center mb-6 w-16 h-16 text-xl text-gray-900 font-bold bg-gray-100 rounded-full">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                  fill="#000000"
                                />
                                <path
                                  d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                  fill="#000000"
                                />
                                <path
                                  d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                  fill="#000000"
                                />
                              </svg>
                            </div>
                            <div className="md:hidden w-px h-24 bg-gray-200" />
                          </div>
                          <div className="flex-1 p-4">
                            <h3 className="font-heading mb-3 text-2xl text-blue-500 font-bold">
                              Result
                            </h3>
                            <p className="text-gray-700 font-normal text-2xl">
                              Logy.AI solution shares their report in under a
                              minute
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
        {/* <section className="py-10 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 bg-white border border-gray-100 rounded-3xl">
              <div className="max-w-7xl ">
                <div className="max-w-lg  text-start">
                  <span className="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest">
                    Testimonials
                  </span>
                  <h2 className="font-heading mb-12 text-4xl md:text-5xl text-gray-900 font-bold tracking-tight">
                    Our customer says
                  </h2>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="w-full md:w-1/3 p-4">
                    <div className="flex flex-col justify-between text-start px-8 pt-12 pb-8 h-full text-center bg-gray-100 border border-gray-100 rounded-3xl">
                      <div className="flex-initial mb-8">
                        <img
                          className="mb-6 mx-auto rounded-full"
                          src="zanrly-assets/images/testimonials/avatar2.png"
                          alt=""
                        />
                        <p className="text-base text-gray-700 font-normal text-xl">
                          Had some issues where my site crashed and broke,
                          reached out to Shuffle Editor to see if they could
                          help me fix it.
                        </p>
                      </div>
                      <div className="flex-initial">
                        <h3 className="font-heading text-2xl text-gray-900 font-bold">
                          Monica Johnson
                        </h3>
                        <p className="text-sm text-gray-500 font-bold">
                          @monicajonhson
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="flex flex-col justify-between text-start px-8 pt-12 pb-8 h-full text-center bg-gray-100 border border-gray-100 rounded-3xl">
                      <div className="flex-initial mb-8">
                        <img
                          className="mb-6 mx-auto rounded-full"
                          src="zanrly-assets/images/testimonials/avatar2.png"
                          alt=""
                        />
                        <p className="text-base text-gray-700 font-normal text-xl">
                          Had some issues where my site crashed and broke,
                          reached out to Shuffle Editor to see if they could
                          help me fix it.
                        </p>
                      </div>
                      <div className="flex-initial">
                        <h3 className="font-heading text-2xl text-gray-900 font-bold">
                          Monica Johnson
                        </h3>
                        <p className="text-sm text-gray-500 font-bold">
                          @monicajonhson
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-4">
                    <div className="flex flex-col justify-between text-start px-8 pt-12 pb-8 h-full text-center bg-gray-100 border border-gray-100 rounded-3xl">
                      <div className="flex-initial mb-8">
                        <img
                          className="mb-6 mx-auto rounded-full"
                          src="zanrly-assets/images/testimonials/avatar2.png"
                          alt=""
                        />
                        <p className="text-base text-gray-700 font-normal text-xl">
                          Had some issues where my site crashed and broke,
                          reached out to Shuffle Editor to see if they could
                          help me fix it.
                        </p>
                      </div>
                      <div className="flex-initial">
                        <h3 className="font-heading text-2xl text-gray-900 font-bold">
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
        </section> */}
        <section className="pb-6 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="py-16 px-8 md:px-16 bg-white rounded-3xl">
              <div className="flex flex-wrap -m-8">
                <div className="w-full md:w-1/2 p-8">
                  <div className="md:max-w-sm">
                    <span className="inline-block mb-5 text-sm text-blue-500 font-bold uppercase tracking-widest">
                      Use our solution
                    </span>
                    <h2 className="font-heading mb-8 text-4xl md:text-5xl text-gray-900 font-bold tracking-tight">
                      Take full control of design &amp; development. Use our
                      services through.
                    </h2>
                    <div className="flex flex-wrap -m-2"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <div className="flex flex-wrap -m-4">
                    <div className="w-full lg:w-1/2 p-4">
                      <div className="flex flex-col justify-between p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <svg
                          className="mb-28"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                            fill="#3B82F6"
                          />
                          <path
                            d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                            fill="#3B82F6"
                          />
                          <path
                            d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                            fill="#3B82F6"
                          />
                        </svg>
                        <h3 className="font-heading text-2xl text-gray-900 font-normal xl:w-40">
                          Integrate Logy.AI - for - Dentistry to your workflow
                          in a jiff
                        </h3>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                      <div className="flex flex-col justify-between p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <svg
                          className="mb-28"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                            fill="#3B82F6"
                          />
                          <path
                            d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                            fill="#3B82F6"
                          />
                          <path
                            d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                            fill="#3B82F6"
                          />
                        </svg>
                        <h3 className="font-heading text-2xl text-gray-900 font-normal xl:w-40">
                          Experience our AI powered User Interface on the Web
                        </h3>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                      <div className="flex flex-col justify-between p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <svg
                          className="mb-28"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                            fill="#3B82F6"
                          />
                          <path
                            d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                            fill="#3B82F6"
                          />
                          <path
                            d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                            fill="#3B82F6"
                          />
                        </svg>
                        <h3 className="font-heading text-2xl text-gray-900 font-normal xl:w-40">
                          Diagnose your Oral Health on WhatsApp
                        </h3>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                      <div className="flex flex-col justify-between p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <svg
                          className="mb-28"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                            fill="#3B82F6"
                          />
                          <path
                            d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                            fill="#3B82F6"
                          />
                          <path
                            d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                            fill="#3B82F6"
                          />
                        </svg>
                        <h3 className="font-heading text-2xl text-gray-900 font-normal xl:w-40">
                          Get Expert opinion of Professional Dentists with a few
                          clicks
                        </h3>
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
            <div className="relative py-16 px-8 bg-white overflow-hidden rounded-3xl">
              <div className="absolute top-0 left-1/2 min-w-max transform -translate-x-1/2">
                <div className="absolute bg-gradient-radial-white w-full h-full" />
                <img src="zanrly-assets/images/faq/pattern-gray.png" alt="" />
              </div>
              <div className="relative z-10">
                <div className="mb-10 md:max-w-xl mx-auto text-center">
                  <span className="inline-block mb-5 text-sm text-blue-500 font-bold uppercase tracking-widest">
                    Frequently asked questions
                  </span>
                  <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold tracking-tight">
                    Got questions? We’re here to help!
                  </h2>
                </div>
                <Faq />
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
