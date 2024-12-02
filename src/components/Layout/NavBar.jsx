import React, { useState } from "react";
import Logo from "../../assets/CenterField Logo PNG.png";

import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const ProductDropList = [
  {
    Title: "Pig",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eius.",
  },
  {
    Title: "Chiken",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eius.",
  },
  {
    Title: "Fruits",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eius.",
  },
  {
    Title: "Eggs",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eius.",
  },
];

const ResoursesList = [
  {
    Title: "FAQ",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eius.",
  },
  {
    Title: "Documentation",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eius.",
  },
  {
    Title: "Blogs",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eius.",
  },
];

// Drop Down Component

const Dropdown = ({ onMouseLeave, data }) => {
  return (
    <div
      className="bg-CardBg text-black w-60 p-5 absolute top-24 "
      onMouseLeave={onMouseLeave}
    >
      <ul className="flex flex-col gap-2">
        {data.map((list) => {
          return (
            <li key={list.Title} className=" hover:text-PrimaryColor">
              <h1>{list.Title}</h1>
              <p className="text-xs">{list.Desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// NavBar Component

const NavBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDownR, setDropDownR] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const OnMouseLeft = () => {
    setDropDown(false);
    setDropDownR(false);
  };

  return (
    <div>
      <nav className="bg-black px-8 lg:px-40 py-4 borde">
        <ul className="flex items-center justify-between w-full borde">
          <Link to="/">
            <img src={Logo} alt="" className="bordr" />
          </Link>
          <div className="hidden lg:flex items-center justify-between gap-10 w-fit borde">
            {dropDown && (
              <Dropdown data={ProductDropList} onMouseLeave={OnMouseLeft} />
            )}
            <li
              className="flex text-lg hover:text-PrimaryColor justify-center items-center gap-1"
              onMouseOver={() => {
                setDropDown(true);
              }}
            >
              Products
              {dropDown ? <FaAngleUp /> : <FaAngleDown />}
            </li>

            {dropDownR && (
              <Dropdown data={ResoursesList} onMouseLeave={OnMouseLeft} />
            )}
            <li
              className="flex  text-lg hover:text-PrimaryColor justify-center items-center gap-1"
              onMouseOver={() => {
                setDropDownR(true);
              }}
            >
              Resourses
              {dropDownR ? <FaAngleUp /> : <FaAngleDown />}
            </li>

            <Link to="/about-us">
              <li className="flex text-lg hover:text-PrimaryColor justify-center items-center gap-1">
                About Us
              </li>
            </Link>
            <Link to="/contact-us">
              <li className="flex text-lg hover:text-PrimaryColor justify-center items-center gap-1">
                Contact Us
              </li>
            </Link>
          </div>
          <li
            className="lg:hidden"
            onClick={() => {
              setMobileNav(!mobileNav);
            }}
          >
            {mobileNav ? (
              <MdClose size={30} />
            ) : (
              <FaBars className="text-white" size={25} />
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile NavBar */}

      {mobileNav && (
        <div className="absolute bg-black flex justify-center borde py-5 w-full h-screen">
          <div className="flex flex-col gap-4 w-fit">
            {dropDown && (
              <Dropdown data={ProductDropList} onMouseLeave={OnMouseLeft} />
            )}
            <li
              className="flex text-lg hover:text-PrimaryColor justify-center items-center gap-1"
              onMouseOver={() => {
                setDropDown(true);
              }}
            >
              Products
              {dropDown ? <FaAngleUp /> : <FaAngleDown />}
            </li>

            <Link to="/">
              {dropDownR && (
                <Dropdown data={ResoursesList} onMouseLeave={OnMouseLeft} />
              )}
              <li
                className="flex  text-lg hover:text-PrimaryColor justify-center items-center gap-1"
                onMouseOver={() => {
                  setDropDownR(true);
                }}
              >
                Resourses
                {dropDownR ? <FaAngleUp /> : <FaAngleDown />}
              </li>
            </Link>

            <Link to="/about-us">
              <li className="flex text-lg hover:text-PrimaryColor justify-center items-center gap-1">
                About Us
              </li>
            </Link>
            <Link to="/contact-us">
              <li className="flex text-lg hover:text-PrimaryColor justify-center items-center gap-1">
                Contact Us
              </li>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
