import React from "react";
import Hero from "../components/Landing Page/Hero";
import HeroStats from "../components/Landing Page/HeroStats";
import IntroductionToCen from "../components/Landing Page/IntroductionToCen";
import ProductCard from "../components/Utils/ProductCard";

import GreenField from "./../assets/greenField.png";
import HenInCage from "./../assets/HenInCage.png";
import OurProducts from "../components/Landing Page/OurProducts";
import WhyWeAreDiff from "../components/Landing Page/WhyWeAreDiff";
import WhatArePeople from "../components/Landing Page/WhatArePeople";
import BannerCarosel from "../components/Landing Page/BannerCarosel";
import TrustedBy from "../components/Landing Page/TrustedBy";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <HeroStats />
      <IntroductionToCen />
      <ProductCard
        heading={"farm plant location base"}
        desc={
          "lorem FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices. <br /><br /> FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices."
        }
        image={GreenField}
        styles={
          "flex justify-center items-center lg:flex-row px-10 w-full borde border-green-500 lg:px-40 gap-20 borde flex-col-reverse mb-20"
        }
      />
      <ProductCard
        heading={"animal rearing enviroments"}
        desc={`FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices. <br /><br /> FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices.`}
        image={HenInCage}
        styles={
          "flex flex-col-reverse justify-center items-center lg:flex-row lg:flex-row-reverse px-10 lg:px-40 gap-20 borde mb-20"
        }
      />
      <OurProducts />
      <WhyWeAreDiff />
      <WhatArePeople />
      <BannerCarosel />
      <TrustedBy />
    </div>
  );
};

export default LandingPage;
