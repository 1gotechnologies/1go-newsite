import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import emptyBucket from "../assets/emptyBucket.svg";

const BucketListEmpty = () => {
  const navigate = useNavigate();
  return (
    <section className=" h-full max-h-full overflow-y-auto flex flex-col gap-8 items-center p-10 text-center">
      <div className="flex justify-center items-center">
        <img src={emptyBucket} alt="Empty Bucket" />
      </div>
      <h5 className="font-semibold text-base leading-none">
        Bucket list empty
      </h5>
      <div className="text-sm">
        Let’s make your dreams come true. Add places/events you woud like to
        visit/attend.{" "}
      </div>

      <div className="fixed bottom-20 md:bottom-0 right-5 md:right-0 md:relative text-right md:w-full flex justify-end pt-0 md:pt-10">
        <AiFillPlusCircle
          className="text-[#1F66D0] !min-w-[3rem] cursor-pointer"
          size={"3rem"}
          onClick={() => navigate("/bucket-list/add")}
        />
      </div>
    </section>
  );
};

export default BucketListEmpty;
