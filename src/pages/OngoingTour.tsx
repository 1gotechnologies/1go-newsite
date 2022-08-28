import MainLayout from "../layout/MainLayout";
import React from "react";
import { faker } from "@faker-js/faker";

// Full name:
// Category:
// Number of persons:
// Email address:
// Phone number:
// Package type:
// Price:

const UngoingTour: React.FC<{}> = (props) => {
  const fact = faker.random.words();
  const tourLocation = faker.address.country();
  const snippet = faker.random.words();

  return (
    <MainLayout>
      <section className="container px-3 flex flex-col gap-10">
        {/* snippet */}
        <div className="font-thin">{snippet}</div>
        {/* image */}
        <div className=""></div>
        {/* fact */}
        <div className="">
          <strong>Did you know that:</strong> {fact}
        </div>
        {/* places */}
        <div className="">
          <h5 className="pb-4">Places to visit in {tourLocation}</h5>
        </div>
        {/* foods */}
        <div className="">
          <h5 className="pb-4">Places to visit in {tourLocation}</h5>
        </div>
      </section>
    </MainLayout>
  );
};

export default UngoingTour;
