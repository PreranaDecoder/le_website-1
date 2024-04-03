import React from "react";
import data from "../assets/data/data.json";
import { Link } from "react-router-dom";

export default function Faq() {
  const [companyName, setCompanyName] = React.useState([]);
  React.useEffect(() => {
    const company = data.map((item) => {
      const obj = {
        name: item.COMPANY,
        isExpand: false,
      };
      return obj;
    });
    const companyName = company.filter(
      (v, i, a) => a.findIndex((t) => t.name === v.name) === i
    );
    setCompanyName(companyName);
  }, []);
  const openAccordion = (name) => {
    const tempArr = [...companyName];
    const updatedCompany = tempArr.map((item) => {
      if (item.name === name.name) {
        return { name: item.name, isExpand: !item.isExpand };
      } else {
        return item;
      }
    });
    setCompanyName(updatedCompany);
  };

  return (
    <div className="App">
      <div className="accordion-container">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap -m-3 mb-10">
            {companyName.map((com, index) => {
              const filterCompany = data.filter(
                (item) => item.COMPANY === com.name
              );
              return (
                <div className="w-full p-3">
                  <a
                    className="block p-10 bg-gray-100 rounded-3xl"
                    onClick={() => openAccordion(com)}
                  >
                    <div className="flex flex-wrap -m-2">
                      <div className="flex-1 p-2">
                        <h3 className="font-heading text-xl text-gray-900 font-bold">
                          {com.name}
                        </h3>
                        <div
                          style={{
                            display: `${com.isExpand ? "block" : "none"}`,
                          }}
                        >
                          <br />
                          {filterCompany.map((item, index) => {
                            return (
                              <div key={index}>
                                <h5 className=" text-xl text-gray-900 font-normal">
                                  {item.BILL_INFO_ID}{" "}
                                </h5>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="w-auto p-2">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.9207 8.17999H11.6907H6.08072C5.12072 8.17999 4.64073 9.33999 5.32073 10.02L10.5007 15.2C11.3307 16.03 12.6807 16.03 13.5107 15.2L15.4807 13.23L18.6907 10.02C19.3607 9.33999 18.8807 8.17999 17.9207 8.17999Z"
                            fill="#D1D5DB"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
          <p className="text-gray-500 font-normal text-2xl text-center">
            <span>Still have any questions? </span>
            <Link className="text-blue-500 hover:text-blue-600" to="/contact">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
