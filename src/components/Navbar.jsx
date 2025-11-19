import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { CgClose } from "react-icons/cg";
import { useCart } from "../context/CartContext";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({ location, getLocation, setOpenDropDown, openDropDown }) => {
  const { cartItem } = useCart();
  const [openNav, setOpenNav] = useState(false);

  const toggleDropDown = () => {
    // if parent controls dropdown, use setter; otherwise toggle local
    if (typeof setOpenDropDown === "function") {
      setOpenDropDown(!openDropDown);
    } else {
      // fallback: toggle via event on element (no-op if not provided)
    }
  };

  return (
    <header className="bg-black/20 px-4 py-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* logo + location */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl text-white">
              <span className="text-red-500 font-serif">&lt;Tech</span>Haat/&gt;
            </h1>
          </Link>

          {/* desktop location */}
          <div className="md:flex hidden gap-1 cursor-pointer items-center">
            <MapPin className="text-red-600" />
            <span className="font-semibold text-white">
              {location ? (
                <div className="-space-y-2">
                  <p className="text-red-500">{location.county}</p>
                  <p className="text-red-500">{location.state}</p>
                </div>
              ) : (
                <span className="text-red-500">Add Address</span>
              )}
            </span>
            <FaCaretDown
              onClick={toggleDropDown}
              className="text-white ml-1 cursor-pointer"
            />
          </div>

          {/* location dropdown (absolute) */}
          {openDropDown ? (
            <div className="w-[250px] h-max z-50 bg-white fixed top-16 left-44 border-2 p-5 border-gray-100 rounded-md shadow-lg">
              <h1 className="font-semibold mb-4 text-xl flex justify-between items-center text-red-500">
                Change Location{" "}
                <span onClick={toggleDropDown} className="cursor-pointer">
                  <CgClose />
                </span>
              </h1>
              <button
                onClick={getLocation}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400 cursor-pointer"
              >
                Detect My Location
              </button>
            </div>
          ) : null}
        </div>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <ul className="flex gap-7 items-center font-semibold text-xl">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-white" : ""}`
              }
            >
              <li className="text-red-500">Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-white" : ""}`
              }
            >
              <li className="text-red-500">Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-white" : ""}`
              }
            >
              <li className="text-red-500">About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-white" : ""}`
              }
            >
              <li className="text-red-500">Contact</li>
            </NavLink>
          </ul>

          <Link to={"/cart"} className="relative ml-3">
            <IoCartOutline className="h-7 w-7 text-white" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-xs">
              {cartItem.length}
            </span>
          </Link>

          <div className="ml-3">
            <SignedOut>
              <SignInButton>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>

        {/* mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7 text-white" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-xs">
              {cartItem.length}
            </span>
          </Link>

          {openNav ? (
            <HiMenuAlt3
              className="h-7 w-7 text-white"
              onClick={() => setOpenNav(false)}
            />
          ) : (
            <HiMenuAlt1
              className="h-7 w-7 text-white"
              onClick={() => setOpenNav(true)}
            />
          )}
        </div>
      </div>

      {/* mobile nav panel */}
      {openNav && (
        <div className="md:hidden bg-black/10 mt-4 px-4 pb-6">
          <div className="max-w-6xl mx-auto flex flex-col gap-4">
            <ul className="flex flex-col gap-3 font-semibold text-lg">
              <NavLink to={"/"} onClick={() => setOpenNav(false)}>
                <li className="text-red-500">Home</li>
              </NavLink>
              <NavLink to={"/products"} onClick={() => setOpenNav(false)}>
                <li className="text-red-500">Products</li>
              </NavLink>
              <NavLink to={"/about"} onClick={() => setOpenNav(false)}>
                <li className="text-red-500">About</li>
              </NavLink>
              <NavLink to={"/contact"} onClick={() => setOpenNav(false)}>
                <li className="text-red-500">Contact</li>
              </NavLink>
            </ul>

            <div className="flex items-center gap-3">
              <SignedOut>
                <SignInButton>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer">
                    Sign in
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  // on mobile, reuse parent getLocation if provided
                  if (typeof getLocation === "function") getLocation();
                  setOpenNav(false);
                }}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Detect My Location
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
