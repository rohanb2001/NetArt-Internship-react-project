import React from "react";
import Trophy from "./assets/1.png";
import PrizeImg from "./assets/2.png";

const PrizeSection = () => {
  return (
    <>
      <div className="prize__Section">
        <div className="trophy__img">
          <img src={Trophy} alt="" />
        </div>
        <div className="prize__img-content">
          <div className="img__desc-1">
            <p>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </p>
            <div className="img__desc-2">
              <ul>
                <li>
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </li>
              </ul>
            </div>
          </div>
          <div className="prize__img">
            <img src={PrizeImg} alt="" />
          </div>
          <div className="img__desc-3">
            <p>
              Government of India has awarded the{" "}
              <span>"National Energy Conservation Award 2018".</span> Mr. G.
              Selvaraj, Joint Managing Director of C.R.I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
              Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrizeSection;
