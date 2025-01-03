import React from "react";
import ReachUsForm from "../components/FAQPage/ReachUsForm";

const FAQPage = () => {
  return (
    <div className="px-10 lg:px-40 py-8">
      <div className="py-2">
        <h1 className="text-black capitalize text-3xl">
          frequently asked questions
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5  w-full bg-CardBg shadow-lg px-10 py-4 capitalize text-black border">
          <h1 className=" text-2xl">how can i purchase your products?</h1>
          <p>
            we have make preparation for your arrivals. let hear from you. you
            gonna enjoy your time with us. Thanks for choosing centerfield
            farms. we have make preparation for your arrivals. let hear from
            you. you gonna enjoy your time with us. Thanks for choosing
            centerfield farms. we have make preparation for your arrivals. let
            hear from you. you gonna enjoy your time with us. Thanks for
            choosing centerfield farms.
          </p>
        </div>

        <div className="flex flex-col gap-5  w-full bg-CardBg shadow-lg px-10 py-4 capitalize text-black border">
          <h1 className=" text-2xl">where is your company located?</h1>
          <p className="hidden">
            we have make preparation for your arrivals. let hear from you. you
            gonna enjoy your time with us. Thanks for choosing centerfield
            farms. we have make preparation for your arrivals. let hear from
            you. you gonna enjoy your time with us. Thanks for choosing
            centerfield farms. we have make preparation for your arrivals. let
            hear from you. you gonna enjoy your time with us. Thanks for
            choosing centerfield farms.
          </p>
        </div>

        <div className="flex flex-col gap-5  w-full bg-CardBg shadow-lg px-10 py-4 capitalize text-black border">
          <h1 className=" text-2xl">
            what’s your products duration before expire?
          </h1>
          <p className="hidden">
            we have make preparation for your arrivals. let hear from you. you
            gonna enjoy your time with us. Thanks for choosing centerfield
            farms. we have make preparation for your arrivals. let hear from
            you. you gonna enjoy your time with us. Thanks for choosing
            centerfield farms. we have make preparation for your arrivals. let
            hear from you. you gonna enjoy your time with us. Thanks for
            choosing centerfield farms.
          </p>
        </div>

        <div className="flex flex-col gap-5  w-full bg-CardBg shadow-lg px-10 py-4 capitalize text-black border">
          <h1 className=" text-2xl">
            like how much can i invest in your farms?
          </h1>
          <p className="hidden">
            we have make preparation for your arrivals. let hear from you. you
            gonna enjoy your time with us. Thanks for choosing centerfield
            farms. we have make preparation for your arrivals. let hear from
            you. you gonna enjoy your time with us. Thanks for choosing
            centerfield farms. we have make preparation for your arrivals. let
            hear from you. you gonna enjoy your time with us. Thanks for
            choosing centerfield farms.
          </p>
        </div>
      </div>
      <ReachUsForm />
    </div>
  );
};

export default FAQPage;
