import React from "react";
import { NavLink } from "react-router-dom";
import { BiHome, BiFilter } from "react-icons/bi";
import styled from "styled-components";

const FooterComponent = () => {
  return (
    <footer className="bg-white p-0 m-0 shadow rotate-180 z-50 fixed md:relative bottom-0 right-0 left-0">
      {/* medium+ screens footer */}
      <div className="container max-w-screen-lg py-5 font-[400] hidden md:block">
        <div className=" rotate-180 text-center ">
          © 2022 1go Technologies. All rights reserved
        </div>
      </div>

      {/* mobile footer */}
      <div className="container py-2 font-[400] md:hidden">
        <div className=" rotate-180 text-center flex justify-around items-center">
          <NavLink className="flex flex-col justify-center items-end" to={"/"}>
            <div className="w-full flex items-end justify-center">
              <BiHome fontSize={"1.4rem"} />
            </div>
            <small className="text-xs">Home</small>
          </NavLink>
          <NavLink className="flex flex-col justify-center items-end" to={"/"}>
            <div className="w-full flex items-end justify-center">
              <BiFilter fontSize={"1.4rem"} />
            </div>
            <small className="text-xs">Bucket List</small>
          </NavLink>
          <NavLink className="flex flex-col justify-center items-end" to={"/"}>
            <div className="w-full flex items-end justify-center">
              <BiFilter fontSize={"1.4rem"} />
            </div>
            <small className="text-xs">Settings</small>
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;
