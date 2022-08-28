import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import emptyBucket from "../assets/emptyBucket.svg";
import BucketListItem from "./BucketListItem";
import { Btn } from "./Styled";
import MainLayout from "../layout/MainLayout";

const BucketList: React.FC<{ list: any[] }> = (props) => {
  const navigate = useNavigate();
  return (
    <section className="relative px-3 flex flex-col gap-8">
      <h1 className="capitalize text-2xl font-semibold sticky top-[70px] md:top-11 !w-full py-3 !bg-[#FCFCFC] z-10">
        Bucket list
      </h1>

      <p className=" text-sm">
        Let’s make your dreams come true. Add places/events you woud like to
        visit/attend.
      </p>

      <div className="flex flex-col gap-3 px-1">
        {props.list.map((el, index) => (
          <BucketListItem
            id={faker.database.mongodbObjectId()}
            title={faker.address.cityName()}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default BucketList;
