import React from "react";
import Motors from "./assets/3.png";

const MotorsSection = () => {
  return (
    <>
      <div className="motors__section">
        <p className="motors__pgh">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div className="img__motors">
          <img src={Motors} alt="" />
        </div>
        <p className="motors__pgh">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
    </>
  );
};

export default MotorsSection;
