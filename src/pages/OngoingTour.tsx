import MainLayout from "../layout/MainLayout";
import React from "react";
import { faker } from "@faker-js/faker";
import ImageCard from "../components/ImageCard";

// Full name:
// Category:
// Number of persons:
// Email address:
// Phone number:
// Package type:
// Price:

const UngoingTour: React.FC<{}> = (props) => {
  const fact = faker.lorem.sentence();
  const media = `https://api.pexels.com/videos/`;

  const tourLocation = faker.address.country();
  const snippet = faker.lorem.sentence();

  return (
    <MainLayout>
      <section className="container px-3 flex flex-col gap-8">
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
      </section>
    </MainLayout>
  );
};

export default UngoingTour;
