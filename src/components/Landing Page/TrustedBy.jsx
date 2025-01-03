import React from "react";

const TrustedBy = () => {
  const TrustedByDetails = [
    {
      id: 1,
      name: "FODD",
      details:
        "FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted.",
    },
    {
      id: 2,
      name: "BNBBC",
      details:
        "FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted.",
    },
    {
      id: 3,
      name: "FFDSC",
      details:
        "FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted.",
    },
    {
      id: 4,
      name: "GRSC",
      details:
        "FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted.",
    },
    {
      id: 5,
      name: "BDCS",
      details:
        "FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted.",
    },
    {
      id: 6,
      name: "ADFA",
      details:
        "FarmTogether enables accredited investors and institutions to invest directly in high-quality farmland assets vetted.",
    },
  ];

  return (
    <div className="py-20 lg:py-20 px-10 lg:px-40 flex justify-center items-center borde">
      <div className="bg-blac flex flex-col items-center gap-5">
        <h1 className="text-black lg:w-1/2 capitalize text-MainHeading text-center">
          trusted by public and private sectors
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 borde border-green-700">
          {TrustedByDetails.map((item) => (
            <div
              key={item.id}
              className="bg-CardBg p-4 border
            borde-red-600 text-black shadow-md"
            >
              <h1 className="text-2xl">
                {item.id}. {item.name}
              </h1>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
