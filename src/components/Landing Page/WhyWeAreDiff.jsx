import React from "react";
import LandingYT from "../../assets/WhyChooseUsImg.png";

const Services = [
  {
    number: 1,
    title: "Free Consultation",
    description:
      "FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted.",
  },
  {
    number: 2,
    title: "Invest In Farm/Livestocks",
    description:
      "FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted.",
  },
  {
    number: 3,
    title: "Buy/Own A Farm, Land & Livestocks",
    description:
      "FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted.",
  },
  {
    number: 4,
    title: "Best Security & Protection",
    description:
      "FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted.",
  },
];

const WhyWeAreDiff = () => {
  return (
    <div className="flex pt-20 lg:py-5 px-10 lg:px-40 gap-10 flex-col justify-center items-center borde border-green-600">
      <div className="capitalize text-center w-fit lg:w-[600px] borde">
        <h1 className="text-MainHeading text-black">why we’re different</h1>
        <p className="text-SubHeading text-gray-700">
          Farm Together, enables accredited investors and institutions to invest
          directly in high-quality farmland assets vetted by rigorous,
          institutional due diligence and active asset management.
        </p>
      </div>

      <div className="flex flex-col w-full gap-10 lg:flex-row lg:justify-between lg:items-cente borde border-red-700">
        {/* Left Section: Numbered List */}

        <div className="flex flex-col gap-6 lg:w-1/2 borde border-green-500">
          {/* Numbered Items */}

          {Services.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 h-1/4 borde border-pink-600"
            >
              <div className="">
                <h1 className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-bold borde">
                  {item.number}
                </h1>
              </div>

              <div className="flex flex-col h-full bg-CardBg p-6 shadow-xl border-yellow-300 borde">
                <h3 className="text-2xl font-semibold text-black text-nowra">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="">
          <img
            src={LandingYT}
            alt="Farmland"
            className=" shadow-lg"
            width={"500px"}
            height={"1px"}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyWeAreDiff;
