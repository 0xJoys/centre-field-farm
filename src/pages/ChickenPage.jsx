import React from "react";
import ChickenHero from "../components/ChickenPage/ChickenHero";

import ProductCardWithButton from "../components/Utils/ProductCardWithButton";

import CrackedEggs from "./../assets/white egg craked.png";
import FineEggs from "./../assets/FineEggs.png";

import PigBaby from "./../assets/PigBaby.png";
import CowFaceF from "./../assets/CowFaceF.png";
import chicken from "./../assets/chickens.png";

import CheckOtherProductCard from "../components/Utils/CheckOtherProductCard";

const ChickenPage = () => {
  const CardDetails = [
    {
      productTitle: "Cow Rearing Rnvironments",
      image: CowFaceF,
    },
    {
      productTitle: "Chicken Exploration",
      image: chicken,
    },
    {
      productTitle: "Pig Animals In The Garden",
      image: PigBaby,
    },
  ];

  return (
    <div>
      <ChickenHero />

      <ProductCardWithButton
        heading={"standard white eggs"}
        desc={`FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices. <br /><br /> FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices.`}
        image={FineEggs}
        styles={
          "flex justify-center items-center lg:flex-row px-10 w-full borde border-green-500 lg:px-40 gap-20 borde flex-col-reverse mb-20"
        }
      />

      <ProductCardWithButton
        heading={"standard white eggs"}
        desc={`FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices. <br /><br /> FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices.`}
        image={CrackedEggs}
        styles={
          "flex flex-col-reverse justify-center items-center lg:flex-row lg:flex-row-reverse px-10 lg:px-40 gap-20 borde mb-20"
        }
      />

      <ProductCardWithButton
        heading={"standard white eggs"}
        desc={`FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices. <br /><br /> FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices.`}
        image={FineEggs}
        styles={
          "flex justify-center items-center lg:flex-row px-10 w-full borde border-green-500 lg:px-40 gap-20 borde flex-col-reverse mb-20"
        }
      />

      <ProductCardWithButton
        heading={"standard white eggs"}
        desc={`FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices. <br /><br /> FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted by rigorous, institutional due diligence and active asset management. Farmland has historically proven to be uncorrelated to economic cycles and broad market indices.`}
        image={CrackedEggs}
        styles={
          "flex flex-col-reverse justify-center items-center lg:flex-row lg:flex-row-reverse px-10 lg:px-40 gap-20 borde mb-20"
        }
      />

      <CheckOtherProductCard
        sectionTitle={"Check Other Products"}
        CardDetails={CardDetails}
        productTitle={CardDetails.productTitle}
        image={CardDetails.image}
      />
    </div>
  );
};

export default ChickenPage;
