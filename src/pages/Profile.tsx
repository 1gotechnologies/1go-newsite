import { profile } from "console";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import MainLayout from "../layout/MainLayout";

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
    <MainLayout>
      <section className=" container max-w-screen-md flex flex-col gap-6 px-5">
        <div className=" flex justify-between items-center">
          <span>Number of booked tours:</span>
          <span>0</span>
        </div>

        <h1 className="capitalize text-2xl font-semibold sticky top-6 py-3 bg-[#FCFCFC]">
          Profile
        </h1>

        <div
          className="flex
         items-center justify-center"
        >
          <div>
            <FaUserCircle
              fontSize={"2rem"}
              className={`transition-all duration-300 text-[#ACAAAA] ${
                !user.avatar ? " !h-fit !scale-100" : " !max-h-0 !scale-0"
              }`}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Profile;
