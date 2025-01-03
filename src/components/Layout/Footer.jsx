import React from "react";

import Logo from "../../assets/CenterField Logo PNG.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-SecondryColor py-10 lg:pb-20 px-10 lg:px-40 borde">
      <div className=" w-full flex flex-col items-center gap-5 borde">
        <h1 className="capitalize text-2xl text-center">
          sign up for our newsletter
        </h1>

        <div className="w-full flex flex-col lg:flex-row items-cente gap-5 border-amber-400 borde">
          <div className="w-full h-20 flex items-center justify-center borde">
            <Link to="/">
              <img src={Logo} alt="" className="bordr" />
            </Link>
          </div>

          <div className="w-full h-20 flex items-center justify-center borde">
            <form action="" className="w-full flex">
              <input
                type="text"
                placeholder="enter email"
                className="w-full p-4 bg-white"
              />
              <button className="bg-PrimaryColor p-4">Subscribe</button>
            </form>
          </div>

          <div className="w-full h-20 gap-4 flex items-center justify-center borde">
            <FaFacebook
              size={50}
              className="bg-PrimaryColor p-2 rounded-full hover:bg-[#FFA500]"
            />
            <FaTwitter
              size={50}
              className="bg-PrimaryColor p-2 rounded-full hover:bg-[#FFA500]"
            />
            <FaInstagram
              size={50}
              className="bg-PrimaryColor p-2 rounded-full hover:bg-[#FFA500]"
            />
          </div>
        </div>

        <div className="lg:grid grid-cols-4 flex flex-col item-center gap-5 borde w-full capitalize borde">
          <div className="borde w-52">
            <h1 className="text-3xl"> Address</h1>
            <address className="text-xl">no 20 ogbomoso, oyo, nG.</address>
            <address className="text-xl">235 san Francisco, USA.</address>
            <h1 className="text-2xl"> Phone</h1>
            <p>(+234) 70 456 675 22</p>
          </div>

          <div className="borde w-52">
            <h1 className="text-3xl">Product</h1>
            <ul className="flex flex-col gap-2 text-xl">
              <Link>
                <li className="hover:text-PrimaryColor cursor-pointer">
                  Live Stock
                </li>
              </Link>

              <Link>
                <li className="hover:text-PrimaryColor cursor-pointer">Farm</li>
              </Link>

              <Link>
                <li className="hover:text-PrimaryColor cursor-pointer">Land</li>
              </Link>

              <Link>
                <li className="hover:text-PrimaryColor cursor-pointer">
                  Enviroment
                </li>
              </Link>
            </ul>
          </div>

          <div className="borde w-52">
            <h1 className="text-3xl">About</h1>
            <ul className="flex flex-col gap-2 text-xl">
              <Link>
                <li className="hover:text-PrimaryColor cursor-pointer">
                  our mission
                </li>
              </Link>

              <Link>
                <li className="hover:text-PrimaryColor cursor-pointer">
                  our partners
                </li>
              </Link>

              <Link>
                <li className="hover:text-PrimaryColor cursor-pointer">
                  our team
                </li>
              </Link>

              <Link>
                <li className="hover:text-PrimaryColor cursor-pointer">
                  contact us
                </li>
              </Link>
            </ul>
          </div>

          <div className="borde w-52">
            <h1 className="text-3xl">Resources </h1>
            <ul className="flex flex-col gap-2 text-xl">
              <Link>
                <li className="hover:text-PrimaryColor cursor-pointer">
                  blogs
                </li>
              </Link>

              <Link>
                <li className="hover:text-PrimaryColor cursor-pointer">
                  documents
                </li>
              </Link>

              <Link>
                <li className="hover:text-PrimaryColor cursor-pointer">fAQ</li>
              </Link>

              <Link>
                <li className="hover:text-PrimaryColor cursor-pointer">Jobs</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:text-xl lg:flex-row items-ce justify-center borde ">
          <ul className="flex gap-5 capitalize">
            <Link>
              <li className="borde border-r-2 px-4 hover:text-PrimaryColor cursor-pointer">
                privacy & policy
              </li>
            </Link>

            <Link>
              <li className="borde lg:border-r-2 px-4 hover:text-PrimaryColor cursor-pointer">
                Terms and conditions
              </li>
            </Link>
          </ul>

          <p className="borde text-center borde-r- px-4">
            &copy; 2022 centerfield farm. all right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
