import React from "react";
import ProductCard from "../components/Utils/ProductCard";
import GreenField from "./../assets/greenField.png";
import TalkAboutExpImg from "./../assets/TalkAboutExpImg.png";
import Strawberry from "./../assets/Strawberry.png";
import ManyChicks from "./../assets/ManyChicks.png";
import TractorWorkingOnField from "./../assets/TractorWorkingOnField.png";
import AboutUsHero from "../components/About Page/AboutUsHero";
import WhatWeDo from "../components/About Page/WhatWeDo";
import OurQualification from "../components/About Page/OurQualification";

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsHero />

      <ProductCard
        heading={"about centerfield farm."}
        desc={`FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices. <br /><br /> FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices.`}
        image={GreenField}
        styles={
          "flex flex-col-reverse justify-center items-center lg:flex-row lg:flex-row-reverse px-10 lg:px-40 gap-20 borde mb-20"
        }
      />

      <ProductCard
        heading={"talking about experience"}
        desc={
          "lorem FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices. <br /><br /> FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices."
        }
        image={TalkAboutExpImg}
        styles={
          "flex justify-center items-center lg:flex-row px-10 w-full borde border-green-500 lg:px-40 gap-20 borde flex-col-reverse mb-20"
        }
      />

      <WhatWeDo />

      <ProductCard
        heading={"planting of farm produce"}
        desc={`FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices. <br /><br /> FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices.`}
        image={Strawberry}
        styles={
          "flex flex-col-reverse justify-center items-center lg:flex-row lg:flex-row-reverse px-10 lg:px-40 gap-20 borde mb-20"
        }
      />

      <ProductCard
        heading={"rearing of animals"}
        desc={
          "lorem FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices. <br /><br /> FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices."
        }
        image={ManyChicks}
        styles={
          "flex justify-center items-center lg:flex-row px-10 w-full borde border-green-500 lg:px-40 gap-20 borde flex-col-reverse mb-20"
        }
      />

      <ProductCard
        heading={"selling acres of lands"}
        desc={`FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices. <br /><br /> FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices.`}
        image={TractorWorkingOnField}
        styles={
          "flex flex-col-reverse justify-center items-center lg:flex-row lg:flex-row-reverse px-10 lg:px-40 gap-20 borde mb-20"
        }
      />
      <OurQualification />
    </div>
  );
};

export default AboutUsPage;
