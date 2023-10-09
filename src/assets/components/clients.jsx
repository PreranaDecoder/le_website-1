import "../css/clients.css";
import cartula from "../img/Cartula Health.png";
import kdisk from "../img/K - DISC logo.png";
import pristyn from "../img/Pristyn Care.png";
import sharpsight from "../img/sharpsight.png";
import colgate from "../img/Colgate-Logo.png";
import dot from "../img/DOT.png";
import aggarwal from "../img/Dr. Agarwals.png";
import cdot from "../img/cdot_logo.png";
import amtron from "../img/amtron.png";
import appolo1 from "../img/Apollo-Clinic.png";
import appolo2 from "../img/Apollo Dental.png";
import appolo3 from "../img/Apollo sugar clinic.png";

function Clients() {
  return (
    <div className="bg-gray-50">
      <div className=" pb-3">
        <div className="">
          <div className=" clientsmq ">
            <div className="marquee1">
              <div className="marquee--inner">
                <div className="flex flex-nowrap justify-center items-center -m-4">
                  <div className="flex-shrink-0 w-64 p-4">
                    <div className="py-10 px-8 h-full bg-white rounded-3xl">
                      <img className="mx-auto w-32" src={cartula} alt="" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-64 p-4">
                    <div className="py-10 h-full px-8  bg-white rounded-3xl">
                      <img className="mx-auto w-32" src={kdisk} alt="" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-64 p-4">
                    <div
                      className="py-10 h-full px-8 rounded-3xl"
                      style={{ background: "#0B243E" }}
                    >
                      <img className="mx-auto w-32" src={pristyn} alt="" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-64 p-4">
                    <div className="py-10 h-full px-8 bg-white rounded-3xl">
                      <img className="mx-auto w-32" src={sharpsight} alt="" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-64 p-4">
                    <div
                      className="py-10 px-8 h-full  rounded-3xl"
                      style={{ background: "#F50005" }}
                    >
                      <img className="mx-auto" src={colgate} alt="" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-64 p-4">
                    <div className="py-10 px-8 h-full bg-white rounded-3xl">
                      <img className="mx-auto" src={dot} alt="" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-64 p-4">
                    <div className="py-10 px-8 h-full bg-white rounded-3xl">
                      <img className="mx-auto" src={aggarwal} alt="" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-64 p-4">
                    <div className="py-10 px-8 h-full bg-white rounded-3xl">
                      <img className="mx-auto" src={cdot} alt="" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-64 p-4">
                    <div className="py-10 px-8 h-full bg-white rounded-3xl">
                      <img className="mx-auto" src={amtron} alt="" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-64 p-4">
                    <div className="py-10 px-8 h-full bg-white rounded-3xl">
                      <img className="mx-auto" src={appolo1} alt="" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-64 p-4">
                    <div className="py-10 px-8 h-full bg-white rounded-3xl">
                      <img className="mx-auto" src={appolo2} alt="" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-64 p-4">
                    <div className="py-10 px-8 h-full bg-white rounded-3xl">
                      <img className="mx-auto" src={appolo3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
