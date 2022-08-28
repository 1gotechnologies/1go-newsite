import MainLayout from "../layout/MainLayout";
import React from "react";
import { faker } from "@faker-js/faker";
import ImageCard from "./ImageCard";
import { Link, useLocation, useParams } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

const OngoingTourIndex = () => {
  const fact = faker.lorem.sentence();
  const media = `https://api.pexels.com/videos/`;
  const { id } = useParams();
  const tourLocation = faker.address.country();
  const snippet = faker.lorem.sentence();

  return (
    <>
      {" "}
      {/* snippet */}
      <div className=" font-light">{snippet}</div>
      {/* image */}
      <div className="">
        <video src={media} className="w-full bg-slate-500"></video>
      </div>
      {/* fact */}
      <div className="">
        <strong>Did you know that:</strong> {fact}
      </div>
      {/* places */}
      <div className="">
        <h5 className="pb-4">Places to visit in {tourLocation}</h5>
        <div className="flex overflow-x-auto gap-3 md:gap-6 pb-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "ui"].map((el, index) => (
            <div className="w-full md:w-[45%] grow" key={index}>
              <ImageCard
                title={faker.address.city()}
                caption={faker.lorem.sentence()}
              />
            </div>
          ))}
        </div>
      </div>
      {/* foods */}
      <div className="">
        <h5 className="pb-4">Places to visit in {tourLocation}</h5>
        <div className="flex overflow-x-auto gap-3 md:gap-6 pb-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "ui"].map((el, index) => (
            <div className="w-full md:w-[45%] grow" key={index}>
              <ImageCard
                title={faker.address.city()}
                caption={faker.lorem.sentence()}
              />
            </div>
          ))}
        </div>
      </div>
      {/* continue to select agent */}
      <div className="max-w-screen-sm w-full self-center">
        <Link
          to={`${tourLocation}/select-agent`}
          className="flex justify-center items-center text-[white] bg-[#1F66D0] rounded-3xl py-4 px-3 gap-10"
        >
          <span className="text-lg font-semibold">Continue</span>

          <HiChevronRight fontSize={"1.8rem"} className="" />
        </Link>
      </div>
    </>
  );
};

export default OngoingTourIndex;
