import { faker } from "@faker-js/faker";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import useBookingStore from "../stores/booking";
import { Btn } from "./Styled";

const OngoingTourSummary: React.FC<{
  setStep: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const booking = useBookingStore();

  const submit = () => {
    booking.agentId = undefined;
    booking.category = undefined;
    booking.individuals = undefined;
    booking.package = undefined;
    booking.passports = undefined;
    booking.tourId = undefined;
    props.setStep("finish");
  };
  return (
    <div className=" flex flex-col gap-7 ">
      {/* brand */}
      <div className="flex px-4 py-2 md:py-4 justify-between items-center gap-5 z-[999999] md:z-10 fixed md:relative top-0 w-[65vw] md:w-full right-3 md:top-0 md:left-0">
        <div
          style={{
            backgroundImage: `url(${faker.image.imageUrl(
              undefined,
              undefined,
              "place"
            )})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="min-w-[85px] min-h-[65px] !bg-slate-500"
        />
        <FaQuestionCircle size={"1.8rem"} />
      </div>
      <p className="pt-2">Flight, Accomodation, tour and Match tickets</p>

      <h1 className="capitalize text-2xl font-semibold !w-full !bg-[#FCFCFC] z-10">
        Summary
      </h1>

      <div className="w-full flex justify-between break-all">
        <div className="grow">Please confirm details</div>
        <Link
          className="text-[#1F66D0] font-semibold"
          to="/profile"
          target={"_blank"}
        >
          Edit
        </Link>
      </div>

      <div className="w-full flex gap-10 break-all">
        <div className=" font-normal">Category:</div>
        <div className="font-light">
          {booking.category?.toLowerCase() === "s"
            ? "Single"
            : booking.category?.toLowerCase() === "c"
            ? "Couple"
            : "Multiple"}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {booking?.passports?.map((el) => (
          <div
            className={`bg-[#e5e5e5] p-4 truncate cursor-pointer border border-green-600`}
          >
            {el.name ?? "International passsport 1"}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {booking?.passports?.map((el) => (
          <div
            className={`bg-[#e5e5e5] p-4 truncate cursor-pointer border border-green-600`}
          >
            {el.name ?? "International passsport 1"}
          </div>
        ))}
      </div>

      {/* continue to select agent */}
      <div className="max-w-screen-sm w-full self-center">
        <Btn
          className={`flex justify-center items-center text-[white] w-full rounded-3xl !py-4 !px-3 gap-10 transition-all duration-500 bg-[#1F66D0]`}
          type="button"
          onClick={submit}
        >
          <span className="text-lg font-semibold">Continue</span>

          <HiChevronRight fontSize={"1.8rem"} className="" />
        </Btn>
      </div>
    </div>
  );
};

export default OngoingTourSummary;
