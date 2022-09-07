import React, { createRef, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiFilter } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import styled from "styled-components";
import useBookingStore from "../stores/booking";

const FooterComponent: React.FC<{ showActionSheet?: boolean }> = (props) => {
  const location = useLocation();
  return (
    <>
      {/* payment actionsheet */}
      <div
        className={`fixed h-screen w-screen z-[999] bottom-0 px-5 pt-5 bg-slate-900 bg-opacity-20 transition-all duration-700 flex justify-center items-end ${
          !props.showActionSheet ? "bottom-[-100vh] " : " bottom-0 "
        }`}
      >
        <div className="bg-white rounded-t-xl w-[90%] max-w-screen-md p-5 sm:p-10 shadow-lg"></div>
      </div>

      {/* footer */}
      <footer className="bg-white p-0 m-0 shadow rotate-180 z-50 overflow-hidden fixed md:relative bottom-0 right-0 left-0">
        {/* medium+ screens footer */}
        <div className="container max-w-screen-lg py-5 font-[400] hidden md:block">
          <div className=" rotate-180 text-center ">
            © 2022 1go Technologies. All rights reserved
          </div>
        </div>

        {/* mobile footer */}
        <div className="container py-2 font-[400] md:hidden">
          <div className=" rotate-180 text-center flex justify-around items-center">
            <NavLink
              className={({ isActive }) =>
                "flex flex-col justify-center items-end transition-all duration-500" +
                (!isActive && location.pathname !== "/"
                  ? " text-[#ACAAAA] "
                  : " text-[#1F66D0] ")
              }
              to={"/dashboard"}
            >
              <div className="w-full flex items-end justify-center">
                <MdHomeFilled fontSize={"1.4rem"} />
              </div>
              <small className="text-xs">Home</small>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "flex flex-col justify-center items-end transition-all duration-500" +
                (!isActive && !location.pathname.startsWith("/bucket-list")
                  ? "  text-[#ACAAAA] "
                  : " text-[#1F66D0] ")
              }
              to={"/bucket-list"}
            >
              <div className="w-full flex items-end justify-center">
                <BiFilter fontSize={"1.4rem"} />
              </div>
              <small className="text-xs">Bucket List</small>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "flex flex-col justify-center items-end transition-all duration-500" +
                (!isActive ? "  text-[#ACAAAA] " : " text-[#1F66D0] ")
              }
              to={"/settings"}
            >
              <div className="w-full flex items-end justify-center">
                <IoSettingsSharp fontSize={"1.4rem"} />
              </div>
              <small className="text-xs">Settings</small>
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};
export default FooterComponent;
