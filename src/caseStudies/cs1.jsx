import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import logo from "../assets/img/LogoFree.svg";
import "../assets/css/cs.css";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Cs1() {
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
                          className=" px-6 py-2 rounded-full inline-block text-sm font-bold text-gray-900 hover:text-gray-700 "
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
      <section className="overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative py-16 px-8 bg-white overflow-hidden rounded-3xl">
            <div className="absolute top-0 left-1/2 min-w-max transform -translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="md:max-w-2xl mx-auto text-center">
                <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black ">
                  Case Study: Logy.AI’s Collaboration with Colgate Kenya
                </h2>
              </div>
              <br />
              <hr />
              <br />
              <h5
                className=" mb-6 text-4xl md:text-5xl lg:text-4xl  "
                style={{ color: "rgb(59 130 246)" }}
              >
                Overview
              </h5>
              <p className="text-gray-500 font-bold">
                Kenya, a nation with a population of more than 50 million,
                suffers from a severe lack of dental care services. The shortage
                of dental professionals, particularly in rural and underserved
                areas, presents a significant obstacle. Colgate and Logy.AI
                partnered together to develop an oral screening tool in Kenya to
                address the country's shortage of dental care facilities.
              </p>
              <br />
              <h5
                className=" mb-6 text-4xl md:text-5xl lg:text-4xl text-gray-900  "
                style={{ color: "rgb(59 130 246)" }}
              >
                The Solution
              </h5>
              <p className="text-gray-500 font-bold">
                The cornerstone of the chatbot is the free dental screenings and
                oral care tips available to its users. The tool is a wonderful
                resource that is supported by WhatsApp, allowing Colgate to
                connect with the masses of the country. The application is
                straightforward to use, educational, and readily accessible to
                all users. Users who have access to a smartphone with internet
                access and WhatsApp installed can carry out screenings within
                minutes. The high number of screenings performed, and the
                general improvement in oral hygiene practices among the general
                public are all indicators of the success of the tool in
                providing free screenings and dental advice.
              </p>
              <br />
              <h5
                className=" mb-6 text-4xl md:text-5xl lg:text-4xl text-gray-900  "
                style={{ color: "rgb(59 130 246)" }}
              >
                Impact
              </h5>
              <p className="text-gray-500 font-bold">
                Colgate’s initiative with Logy.AI has found great success, and
                the figures given below are a testament to that.
              </p>
              <br />
              <h5 className=" mb-3 text-2xl text-gray-900 font-bold ">
                Dental Screenings and Reports
              </h5>
              <p className="text-gray-500 font-bold">
                MyToothDoc has been instrumental in{" "}
                <span className="highl">
                  {" "}
                  61,105 dental screenings as of August 31, 2023
                </span>
                , attesting to its impact. Approximately{" "}
                <span className="highl">64,024 reports</span> have been
                generated between January and August, providing users with a
                fast and easy way to assess their oral health. A total of{" "}
                <span className="highl">359 registered executives </span>{" "}
                support the app.
              </p>
              <br />
              <h5 className=" mb-3 text-2xl text-gray-900 font-bold ">
                Screening by Location
              </h5>
              <p className="text-gray-500 font-bold">
                Across the four regions of Nairobi, Mombasa, Nakuru, and Kisumu,
                a whopping <span className="highl">4108 screenings</span> were
                conducted as of 31 August 2023. 88% of the screenings were
                conducted in Mombassa alone.
              </p>
              <br />
              <h5 className=" mb-3 text-2xl text-gray-900 font-bold ">
                Habits of users
              </h5>
              <p className="text-gray-500 font-bold">
                On analyzing the habits of 55,220 users,{" "}
                <span className="highl">
                  7.7% of users chewed Mira, 5% smoked, and 1.6% chewed tobacco.
                </span>{" "}
                85.7% did not have any specific habits.
              </p>
              <br />
              <h5 className=" mb-3 text-2xl text-gray-900 font-bold ">
                User Engagement
              </h5>
              <p className="text-gray-500 font-bold">
                The total number of active users on the platform has been
                clocked at <span className="highl">35,636 users</span> so far.
                The platform consistently maintains a monthly average user count
                in the range of 4,000 to 5,000. July's statistics of 4,475
                active users demonstrate a substantial level of engagement.{" "}
                <span className="highl">198 unique users in clinic bot </span>{" "}
                were recorded.
              </p>
              <br />
              <h5 className=" mb-3 text-2xl text-gray-900 font-bold ">
                Oral Care Tips
              </h5>
              <p className="text-gray-500 font-bold">
                <span className="highl">10,375 oral care tips</span> were shared
                with the users as of 31st August 2023 with the highest tips
                being shared on topics such as bad breath, cavities and tooth
                decay, stained teeth, and toothache.
              </p>
              <br />
              <h5
                className=" mb-6 text-4xl md:text-5xl lg:text-4xl text-gray-900  "
                style={{ color: "rgb(59 130 246)" }}
              >
                User Story
              </h5>
              <p className="text-gray-500 font-bold">
                Mary Omondi felt extremely nervous when her granddaughter
                suggested she go through an oral screening with the help of
                Colgate’s oral screening tool. But lately, She agreed with her
                granddaughter that it was time for an oral screening.
              </p>
              <p className="text-gray-500 font-bold">
                Her granddaughter quickly took out her phone and accessed the
                chatbot on WhatsApp with a simple “Hi.”
              </p>
              <p className="text-gray-500 font-bold">
                Mary was amazed to see the chatbot responding! The tool asked
                for her name, age, contact number, and other basic details. It
                then requested clear pictures of her teeth. They uploaded the
                images, and the AI-powered system went to work right away. The
                report was divided into three categories: poor, fair, and good.
                Sadly for Mary, the study indicated that her dental health was
                "poor." This meant that she had to seek help to prevent her oral
                health from worsening.
              </p>
              <br />
              <h5
                className=" mb-6 text-4xl md:text-5xl lg:text-4xl text-gray-900  "
                style={{ color: "rgb(59 130 246)" }}
              >
                Conclusion
              </h5>
              <p className="text-gray-500 font-bold">
                Ultimately, AI-powered tools such as Logy.AI’s tool narrate a
                story of how transformation in healthcare systems is possible.
                The tool builds a deep bond with the users and encourages them
                to care for their oral health consistently. In a country like
                Kenya, where dental care is often an afterthought, the tool has
                brought about a change in the people.
              </p>
              <br />
              <ul style={{ listStyleType: "square" }}>
                <li className="text-gray-500 font-bold">
                  {" "}
                  The machine-learning models used by Logy.AI provide accurate
                  diagnoses based on millions of dental records
                </li>
                <li className="text-gray-500 font-bold">
                  The platform uses the process of Image Annotation which
                  involves labeling or classifying an image using text,
                  annotation tools, or both, to show the data features you want
                  your model to recognize on its own
                </li>
                <li className="text-gray-500 font-bold">
                  Logy.AI harnessed the power of WhatsApp enabling ease of use
                  and access.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-10 bg-gray-50 overflow-hidden">
        <br />
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
                    can be used to improve care coordination, prevent avoidable
                    diseases and provide appropriate care for patients
                    worldwide.
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
