import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import useBookingStore from "../stores/booking";
import AvailableAgentCard from "./AvailableAgentCard";

const OngoingTourAgent: React.FC<{
  setStep: Dispatch<SetStateAction<string>>;
}> = (props) => {
  const booking = useBookingStore();
  const select = (id: string) => {
    booking.agentId = id;
    props.setStep("category");
    console.log(booking);
  };
  return (
    <div className=" flex flex-col gap-7 ">
      <p className="pt-2">Select your tour agent</p>
      <h1 className="capitalize text-2xl font-semibold !w-full pb-3 !bg-inherit z-10">
        Available tour agent
      </h1>

      <div className="flex flex-wrap gap-3 justify-around">
        {[1, 2, 3, 4, 5, 6, 7].map((el) => (
          <div className=" w-[95%] sm:w-[48%] lg:w-[30%]" key={el}>
            <AvailableAgentCard
              package={faker.lorem.sentence()}
              prices={{}}
              duration={`${faker.date.future().getDay()} - ${faker.date
                .future()
                .getDay()} ${DateTime.fromISO(
                faker.date.future().toISOString()
              ).toFormat("LLLL")}`}
              name={faker.company.name()}
              logo={faker.image.abstract()}
              id={faker.database.mongodbObjectId()}
              select={select}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingTourAgent;
