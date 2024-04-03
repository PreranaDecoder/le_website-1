import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import navbarLogo from "../assets/img/NavbarLogo.png";
import logo from "../assets/img/LogoFree.svg";
import linkedin from "../assets/img/linkedin.svg";
import abouthead from "../assets/img/abouthead.png";
import aboutusnumbers from "../assets/img/aboutusnumbers.svg";
import mplier from "../assets/img/mplier.png";
import anand from "../assets/zanrly-assets/images/teams/Anand Panchbhai.png";
import vinay from "../assets/zanrly-assets/images/teams/Vinay Khobragade.png";
import priyanjit from "../assets/zanrly-assets/images/teams/Priyanjit Ghosh.png";
import nivedita from "../assets/zanrly-assets/images/teams/Nivedita Tiwari.png";
import Clients from "../assets/components/clients";

import "../assets/css/aboutus.css";

const meta = {
  title: "Logy.AI - about",
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
            <div className="flex items-center justify-between px-6  py-3 bg-white border border-gray-100 rounded-full">
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
                          className="bg-gray-50 px-6 py-2 rounded-full inline-block text-sm font-bold text-gray-900 hover:text-gray-700 "
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
          <div className="bg-white overflow-hidden rounded-t-3xl">
            <div className="px-8 pt-20">
              <div className="md:max-w-2xl text-center mx-auto">
                <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                  About us
                </span>
                <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-gray-900 font-bold tracking-tight">
                  Our Mission
                </h1>
                <p className="mb-8 text-2xl font-normal">
                  Keep innovating and building clinically validated AI tools
                  enabled over smartphones, for easy screening and care
                  coordination that can be used by anyone, anywhere and anytime
                  to touch and improve the health outcomes of 100 million lives
                  by 2030.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-20 px-8 max-w-max mx-auto">
                <img src={abouthead} alt="" />
              </div>
              <div className="absolute left-0 top-0 w-full h-1/2 bg-gray-100">
                <div className="h-full bg-white rounded-b-3xl" />
              </div>
              <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gray-50" />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="pb-12 bg-gray-50 overflow-hidden">
        <div className=" mx-auto ">
          <div className="px-8 bg-white    py-16">
            <div className="max-w-5xl mx-auto">
              <div className=" mb-16">
                <img
                  className="pt-2 mx-auto"
                  style={{ width: "75%" }}
                  src={aboutusnumbers}
                />
              </div>
              <div className="w-full mx-auto text-center">
                <p className="text-gray-900 text-2xl font-normal">
                  With its AI-powered healthcare screening tools, Logy.AI is one
                  of the pioneers in the Software as a medical device (SAMD)
                  domain and is truly a story of made in India for the world.
                  Rooted in three fundamental principles of empathy, honesty,
                  and ethics, Logy.AI envisions a future where accessible
                  healthcare is available to all, facilitated by its remarkable
                  AI tools.
                </p>
                <br />
                <p className="text-gray-900 text-2xl font-normal mb-6">
                  Leveraging advanced technology, Logy.AI's tools possess the
                  capability to diagnose diseases, forecast outcomes, and
                  empower patients to receive prompt and efficient treatment. By
                  adopting Logy.AI's innovative solutions, hospitals, clinics,
                  diagnostic centers, and healthcare organizations can elevate
                  the quality of care they offer, ultimately leading to improved
                  patient outcomes.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-gray-50 overflow-hidden pb-12">
        <div className="container mx-auto px-4">
          <div className="px-8 bg-white rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-8">
                  <div className="md:max-w-lg">
                    <h2 className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-bold tracking-tight text-left">
                      Our Key Investor
                    </h2>
                    <p className=" text-2xl font-normal investorText">
                      Investors who have put their faith in us, we have been
                      able to make great strides in our journey. We are humbled
                      by their trust and are grateful for their support.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    className="mx-auto md:mr-0 rounded-3xl p-6"
                    src={mplier}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 overflow-hidden ">
        <div className="container mx-auto px-4">
          <div className="px-8  rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-8">
                  <div className="md:max-w-lg">
                    <h2 className="font-heading  text-4xl md:text-5xl text-gray-900 font-bold tracking-tight text-left">
                      Partners and collaborators who put their faith in us
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Clients type="contri" />
      </section>

      <section className="pb-12 pt-8 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-xl mx-auto text-center">
            <span className="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest">
              Our team
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 font-bold tracking-tight">
              The brain behind Logy.AI
            </h2>
          </div>
          <div className="flex flex-wrap  -m-4">
            <div className="testimonialblock">
              <div className="flex flex-col  px-8 pt-10 pb-12 h-full text-center bg-white rounded-3xl">
                <div className="flex-initial mb-2">
                  <img
                    className="mb-8 mx-auto rounded-3xl"
                    src={priyanjit}
                    alt=""
                  />
                  <h3 className="font-heading mb-2 text-2xl text-gray-900 font-bold tracking-tight">
                    Priyanjit Ghosh
                  </h3>
                  <p className="text-sm text-gray-500 font-bold">
                    CEO and Co-Founder
                  </p>
                </div>
                <div className="flex-initial">
                  <div className="flex flex-wrap justify-center -m-1.5">
                    <div className="w-auto p-1.5">
                      <a
                        className="flex items-center justify-center w-30 h-10 "
                        href="https://www.linkedin.com/in/priyanjitghosh/"
                        target="_blank"
                      >
                        <img src={linkedin} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonialblock">
              <div className="flex flex-col  px-8 pt-10 pb-12 h-full text-center bg-white rounded-3xl">
                <div className="flex-initial mb-2">
                  <img
                    className="mb-8 mx-auto rounded-3xl"
                    src={anand}
                    alt=""
                  />
                  <h3 className="font-heading mb-2 text-2xl text-gray-900 font-bold tracking-tight">
                    Anand Panchbhai
                  </h3>
                  <p className="text-sm text-gray-500 font-bold">
                    CTO and Co-Founder
                  </p>
                </div>
                <div className="flex-initial">
                  <div className="flex flex-wrap justify-center -m-1.5">
                    <div className="w-auto p-1.5">
                      <a
                        className="flex items-center justify-center w-30 h-10 "
                        href="https://www.linkedin.com/in/anandpanchbhai/"
                        target="_blank"
                      >
                        <img src={linkedin} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonialblock">
              <div className="flex flex-col  px-8 pt-10 pb-12 h-full text-center bg-white rounded-3xl">
                <div className="flex-initial mb-2">
                  <img
                    className="mb-8 mx-auto rounded-3xl"
                    src={nivedita}
                    alt=""
                  />
                  <h3 className="font-heading mb-2 text-2xl text-gray-900 font-bold tracking-tight">
                    Nivedita Tiwari
                  </h3>
                  <p className="text-sm text-gray-500 font-bold">
                    Director of Clinical Ops & Founding team member
                  </p>
                </div>
                <div className="flex-initial">
                  <div className="flex flex-wrap justify-center -m-1.5">
                    <div className="w-auto p-1.5">
                      <a
                        className="flex items-center justify-center w-30 h-10 "
                        href="https://www.linkedin.com/in/nivedita-tiwari-88404216b/"
                        target="_blank"
                      >
                        <img src={linkedin} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonialblock">
              <div className="flex flex-col  px-8 pt-10 pb-12 h-full text-center bg-white rounded-3xl">
                <div className="flex-initial mb-2">
                  <img
                    className="mb-8 mx-auto rounded-3xl"
                    src={vinay}
                    alt=""
                  />
                  <h3 className="font-heading mb-2 text-2xl text-gray-900 font-bold tracking-tight">
                    Vinay Khobragade
                  </h3>
                  <p className="text-sm text-gray-500 font-bold">
                    AI researcher and Founding team member
                  </p>
                </div>
                <div className="flex-initial">
                  <div className="flex flex-wrap justify-center -m-1.5">
                    <div className="w-auto p-1.5">
                      <a
                        className="flex items-center justify-center w-30 h-10 "
                        href="https://www.linkedin.com/in/vinay-khobragade/"
                        target="_blank"
                      >
                        <img src={linkedin} alt="" />
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
