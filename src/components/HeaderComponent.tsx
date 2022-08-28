import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { RiUser4Line } from "react-icons/ri";
import { BiArrowBack, BiFilter } from "react-icons/bi";
import Dropdown from "./Dropdown";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { Btn, SLink } from "./Styled";
import logo from "../assets/logo.png";
import { IoSettingsSharp } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";

const HeaderComponent = () => {
  const [user, setUser] = useState("Admin");
  const [show, setShow] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsHome(location.pathname === "/" || location.pathname === "/dashboard");
    show ? toggleNav() : null;
  }, [location]);
  const goBack = () => navigate(-1);

  const toggleNav = () => setShow(!show);

  return (
    <header className="bg-[#FCFCFC] md:bg-white sticky w-full z-50 top-0 flex justify-between p-3 md:py-0 md:shadow">
      <div className="w-full md:container !max-w-screen-lg flex justify-between gap-x-10 items-center mt-0 pt-4 pb-2 md:py-2 relative">
        <div className={"md:hidden"}>
          {!isHome && (
            <Btn onClick={goBack}>
              <BiArrowBack fontSize={"1.8rem"} />
            </Btn>
          )}
          {isHome && (
            <h3 className="text-2xl whitespace-nowrap">Hi, {user} </h3>
          )}
        </div>
        <NavLink
          className="hidden md:block text-gray-900 text-lg md:text-xl no-underline font-bold min-w-fit"
          to="/"
        >
          <div className="pl-2 md:pl-0 flex gap-2 justify-between items-end md:items-center">
            <img src={logo} className="w-[35px] h-auto" />
            <h1 className="hidden md:block">explore</h1>
          </div>
        </NavLink>

        <div className="grow w-10" />

        <div className="hidden md:block self-center">
          <Dropdown
            label={
              <Btn
                className={
                  "flex gap-2 items-center self-center min-w-fit shrink"
                }
              >
                <span className="grow hidden md:block">Hi, {user}</span>

                <FaUserCircle
                  fontSize={"2rem"}
                  className={`transition-all duration-300 text-[#ACAAAA] ${
                    !show ? " !h-fit !scale-100" : " !max-h-0 !scale-0"
                  }`}
                />
              </Btn>
            }
            content={
              <div className="absolute right-4 flex flex-col gap-1 items-center bg-white p-2 shadow rounded-md min-w-[20vmin]">
                <NavLink
                  className={({ isActive }) =>
                    "transition-all duration-500  block w-full" +
                    (!isActive && location.pathname !== "/"
                      ? " text-[#ACAAAA] "
                      : " text-[#1F66D0] ")
                  }
                  to={"/dashboard"}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    "transition-all duration-500  block w-full" +
                    (!isActive ? " text-[#ACAAAA] " : " text-[#1F66D0] ")
                  }
                  to={"/profile"}
                >
                  Profile
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    "transition-all duration-500  block w-full" +
                    (!isActive ? "  text-[#ACAAAA] " : " text-[#1F66D0] ")
                  }
                  to={"/bucket-list"}
                >
                  Bucket List
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    "transition-all duration-500  block w-full" +
                    (!isActive ? "  text-[#ACAAAA] " : " text-[#1F66D0] ")
                  }
                  to={"/settings"}
                >
                  Settings
                </NavLink>
              </div>
            }
          />
        </div>

        {isHome && (
          <Link
            className={
              "flex gap-2 items-center self-center min-w-fit shrink md:hidden"
            }
            to={"/profile"}
          >
            <span className="grow hidden md:block">Hi, {user}</span>

            <FaUserCircle
              fontSize={"2rem"}
              className={`transition-all duration-300 text-[#ACAAAA] ${
                !show ? " !h-fit !scale-100" : " !max-h-0 !scale-0"
              }`}
            />
          </Link>
        )}
      </div>
    </header>
  );
};
export default HeaderComponent;
