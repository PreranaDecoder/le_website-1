import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import logo from "../assets/img/LogoFree.svg";
import "../assets/css/cs.css";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Cs2() {
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const docs = [
    {
      uri: require("../assets/documents/nigeria1.pdf"),
      fileType: "pdf",
      fileName: " ",
    }, // Local File
  ];
  const configs = {
    pdfVerticalScrollByDefault: true,
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
                          className="inline-block px-6 text-sm font-bold text-gray-900 hover:text-gray-700"
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
        </div>
      </section>
      <section>
        <DocViewer
          documents={docs}
          pluginRenderers={DocViewerRenderers}
          style={{ height: 1000 }}
          config={configs}
        />
      </section>
    </React.Fragment>
  );
}
