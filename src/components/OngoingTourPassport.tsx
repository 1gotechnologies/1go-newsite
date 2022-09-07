import { faker } from "@faker-js/faker";
import React, { useEffect, useRef, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import useBookingStore from "../stores/booking";
import PassportUpload from "./PassportUpload";
import { Btn } from "./Styled";

const OngoingTourPassport: React.FC<{
  setStep: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const booking = useBookingStore();
  const [visas, setVisas] = useState<string[] | Blob[]>(booking.visa ?? []);
  const [visasComplete, setVisasComplete] = useState(false);
  const persons = useRef(booking.persons);
  const setFile = (index: number, val: string | Blob) => {
    const files = visas;
    files[index] = val;
    setVisas(files);
    setVisasComplete(visas?.length === persons.current);
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
        Visa(Fan ID) registration
      </h1>

      <p>
        You will need a visa(fanID) in order to acquire your flight ticket.
        Please note that your visa comes in the form of a fanID and is only
        valid before and during the 2022 world cup at Qatar. To begin
        registration of your fanID you will first need to provide your
        international passport
      </p>

      <h1 className="capitalize text-2xl font-semibold !w-full pb-3 !bg-[#FCFCFC] z-10">
        Upload International passport
      </h1>

      <div className="flex flex-col gap-4">
        {persons.current &&
          Array.from({ length: persons.current }, (v, i) => i).map((el) => (
            <PassportUpload index={el} key={el} setFile={setFile} />
          ))}
      </div>

      {/* continue to select agent */}
      <div className="max-w-screen-sm w-full self-center">
        <Btn
          className={`flex justify-center items-center text-[white] w-full rounded-3xl !py-4 !px-3 gap-10 transition-all duration-500 ${
            visasComplete ? " bg-[#1F66D0] " : "bg-[#c4c4c4]"
          }`}
          type="button"
          onClick={() => props.setStep("packages")}
          disabled={!visasComplete}
        >
          <span className="text-lg font-semibold">Continue</span>

          <HiChevronRight fontSize={"1.8rem"} className="" />
        </Btn>
      </div>
    </div>
  );
};

export default OngoingTourPassport;
