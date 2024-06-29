import { Link } from "react-router-dom";
import logo from "../../assets/img/Logyai_newlogo.png";
import fb from "../../assets/img/fb.svg";
import linkedin from "../../assets/img/linkedin2.svg";
import youtube from "../../assets/img/youtube.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";


function Footer() {
  return (
    <section className="pb-10 bg-gray-50 overflow-hidden">
      <div className="mx-auto ">
        <div className="py-16 px-8 bg-white ">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap -m-8 mb-8">
              <div className="w-full md:w-1/3 p-8">
                <img
                  className="mb-6"
                  style={{ width: "200px", height: "70" }}
                  src={logo}
                  alt=""
                />
                <p className="text-xl font-normal">
                  Experience the power of AI-powered healthcare platform through
                  Logy.AI’s proprietary and clinically validated solutions.
                </p>
              </div>
              <div className="w-full md:w-1/3 p-8 lg:flex lg:justify-center">
                <ul className="md:max-w-max mx-auto  ">
                  <li className="mb-4 hover:text-blue-500">
                    <Link
                      className="inline-block text-xl text-gray-500 hover:text-blue-500 font-semibold tracking-tight"
                      to="/about"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="inline-block text-xl text-gray-500 hover:text-blue-500 font-semibold tracking-tight"
                      to="/products"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="inline-block text-xl text-gray-500 hover:text-blue-500 font-semibold tracking-tight"
                      to="/articles"
                    >
                      Articles
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="inline-block text-xl text-gray-500 hover:text-blue-500 font-semibold tracking-tight"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="inline-block text-xl text-gray-500 hover:text-blue-500 font-semibold tracking-tight"
                      to="/contact"
                    >
                      Terms and conditions
                    </Link>
                  </li>
                  <li>
                    <a
                      className="inline-block text-xl text-gray-500 hover:text-blue-500 font-semibold tracking-tight"
                      href="https://docs.google.com/document/u/0/d/e/2PACX-1vQJDkbwSDLAvy1ea7LcDJIM0TCw-v9e_Jbpu5ah79BR7goKU0hXhf-rhVXLusABoCjlYj6vApGPQ8mZ/pub?pli=1"
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
                      <div style={{ marginRight: "8px" }}>📍</div>
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
                      <div style={{ marginRight: "8px" }}>📍</div>
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
                <div className="font-normal">
                  <span>Ⓒ Copyright. All rights reserved by </span>
                  <Link
                    to="/"
                    className="text-blue-500 hover:text-blue-600"
                    href="#"
                  >
                    Logy.AI
                  </Link>
                  <div className="pr-10 space-x-9 flex items-center justify-betweeen">
                   
                  
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex -m-4 items-center">
                  <div className="p-1">
                    <a
                      href="https://www.linkedin.com/company/logy-ai/?originalSubdomain=in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon
                        fontSize="medium"
                        style={{ color: "#0077B5" }}
                      />
                    </a>
                  </div>
                  <div className="p-1 m-20">
                    <a
                      href="https://www.youtube.com/@LogyAI"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon fontSize="large" style={{ color: "red" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;