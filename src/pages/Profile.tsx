import { profile } from "console";
import React from "react";
import { GoDeviceCamera, GoPlus } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import MainLayout from "../layout/MainLayout";
import { Link } from "react-router-dom";
import { Btn, Input } from "../components/Styled";

interface User {
  avatar?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

const Profile = () => {
  const user: User = {};
  return (
    <MainLayout title="Profile">
      <section className=" container max-w-screen-md flex flex-col gap-6 px-5">
        <div className=" flex justify-between items-center mx-auto w-full md:max-w-screen-sm">
          <span>Number of booked tours:</span>
          <span>0</span>
        </div>

        <h1 className="capitalize text-2xl font-semibold sticky top-[70px] md:top-11 !w-full pt-3 pb-2 bg-[#FCFCFC] z-10">
          Profile
        </h1>

        <div
          className="flex
         items-center justify-center"
        >
          <div className="relative">
            {!user.avatar ? (
              <FaUserCircle
                className="text-[#d9d9d9] min-w-[100px]"
                fontSize={"100px"}
              />
            ) : (
              <div className="w-[10rem] h-[10rem]"></div>
            )}
            <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center!min-w-[3rem] bg-[#c4c4c4] absolute bottom-1 right-[-10%]">
              {!user.avatar ? (
                <GoPlus className="text-white self-center" size={"1.5rem"} />
              ) : (
                <GoDeviceCamera
                  className="text-white  self-center"
                  size={"1.5rem"}
                />
              )}
            </div>
          </div>
        </div>

        <form>
          {/* name */}
          <div className="flex gap-4 w-full">
            <div className="w-[0.8/2] grow">
              <Input
                className="my-3 focus:!border-b-[#1F66D0] text-lg"
                placeholder="First Name"
                // value={firstName}
                // onChange={(e) => {
                //   setFirstName(e.target.value);
                // }}
              />
            </div>
            <div className="w-[0.8/2] grow">
              <Input
                className="my-3 focus:!border-b-[#1F66D0] text-lg"
                placeholder="Last Name"
                // value={lastName}
                // onChange={(e) => {
                //   setLastName(e.target.value);
                // }}
              />
            </div>
          </div>

          {/* email */}
          <div className="my-3 flex flex-wrap">
            <Input
              className={
                "my-3 focus:!border-b-[#1F66D0] text-lg !pr-8 "
                // +
                // email.length && !checkEmail(email)
                // ? " focus:!border-b-[red] "
                // : ""
              }
              type={"email"}
              placeholder="Email"
              // value={email}
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
            />

            {/* {!checkEmail(email) && (
              <small
                className={
                  !email.length
                    ? "hidden "
                    : "" +
                      " w-full text-[red] capitalize text-right leading-none"
                }
              >
                invalid email format
              </small>
            )} */}
          </div>

          {/* password */}
          <div className="flex items-center relative">
            <Input
              className={
                "my-3 focus:!border-b-[#1F66D0] text-lg !pr-[130px] "
                // +
                // password.length && !checkPassword(password)
                // ? " focus:!border-b-[red] "
                // : ""
              }
              // type={!showPwd ? "password" : ""}
              type={"password"}
              placeholder="*****"
              // value={password}
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
            />
            <Link
              to={"/profile/change-password"}
              className="text-[#1F66D0] absolute right-0 text-base"
            >
              Reset password
            </Link>
          </div>

          <div className="flex flex-wrap my-10 gap-10 justify-between items-center">
            {/* change phone number */}
            <Link
              to={"/profile/change-phone"}
              className="text-[#1F66D0] text-base w-full md:w-fit"
            >
              Change phone number
            </Link>

            <Btn className="bg-blue-700 text-white font-semibold !py-4 transition-all duration-500 shadow-lg shadow-slate-300 hover:bg-opacity-50 w-full md:w-[50%] rounded-full h-fit">
              Save changes
            </Btn>
          </div>
        </form>
      </section>
    </MainLayout>
  );
};

export default Profile;
