import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import useBookingStore from "../stores/booking";
import RadioSelect from "./RadioSelect";
import { Btn } from "./Styled";

const OngoingTourCategory: React.FC<{
  setStep: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const booking = useBookingStore();
  const [selected, setSelected] = useState<number | undefined>(booking.persons);
  const next = () => {
    booking.persons = selected;
    props.setStep("documents");
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
      <h1 className="capitalize text-2xl font-semibold !w-full pb-3 z-10">
        Select the number of individuals
      </h1>

      <div className="flex flex-col gap-4">
        {[3, 4, 5].map((el, index) => (
          <RadioSelect
            value={el}
            selected={el === selected}
            select={() => setSelected(el)}
            key={index}
          />
        ))}
      </div>

      {/* continue to select agent */}
      <div className="max-w-screen-sm w-full self-center">
        <Btn
          className={`flex justify-center items-center text-[white] w-full rounded-3xl !py-4 !px-3 gap-10 transition-all duration-500 ${
            selected ? " bg-[#1F66D0] " : "bg-[#c4c4c4]"
          }`}
          type="button"
          onClick={next}
          disabled={!selected ? true : false}
        >
          <span className="text-lg font-semibold">Continue</span>

          <HiChevronRight fontSize={"1.8rem"} className="" />
        </Btn>
      </div>
    </div>
  );
};

export default OngoingTourCategory;
