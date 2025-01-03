import React from "react";
import LadyGratuate from "../../assets/LadyGratuate.png";
import CertificationFile from "../../assets/Certification File.png";
import MenWriteForm from "../../assets/MenWriteForm.png";
import { GiCow, GiPlantRoots } from "react-icons/gi";

const OurQualification = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-10 lg:px-40 lg:mb-20 borde">
      <h1 className="text-MainHeading text-black text-center lg:mb-20">
        Our Qualification
      </h1>
      <div className=" capitalize text-black text-center text-2xl lg:flex flex-row justify-between items-center gap-10 borde">
        <div className="">
          <img src={LadyGratuate} alt="" className="w-full py-5" />
          <h1>study biology at obafemi awolowo uinversity</h1>
        </div>
        <div>
          <img src={CertificationFile} alt="" className="w-full py-5" />
          <h1>study biology at obafemi awolowo uinversity</h1>
        </div>
        <div>
          <img src={MenWriteForm} alt="" className="w-full py-5" />
          <h1>study biology at obafemi awolowo uinversity</h1>
        </div>
      </div>
    </div>
  );
};

export default OurQualification;
