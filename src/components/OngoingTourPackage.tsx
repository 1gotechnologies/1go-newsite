import { faker } from "@faker-js/faker";
import React, { useEffect, useRef, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import useBookingStore from "../stores/booking";
import PhoneInput from "./PhoneInput";
import RadioSelect from "./RadioSelect";
import { Btn, Input } from "./Styled";

const OngoingTourPackage: React.FC<{
  setStep: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const booking = useBookingStore();
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState<string>();
  const [tourPackage, setTourPackage] = useState<string>();
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

      <h1 className="capitalize text-2xl font-semibold !w-full">
        Contact details
      </h1>

      <p>
        A softcopy of your fanID would be sent to you via your provided email
        address, within three busness days, after payment is completed. While
        the hardcopy of your fanID would be given to you at the airport, at
        least 2 hours to your take-off time <br />
        <strong>
          Note: The softcopy of your fanID can perform all functions of the
          hardcopy.
        </strong>
      </p>

      <div className="flex flex-col py-2 gap-7">
        <div className="flex flex-col gap-4">
          <label htmlFor="phoneNumber">
            <strong>Enter mobile number</strong>
          </label>
          {booking.persons &&
            Array.from({ length: booking.persons }, (v, i) => i).map((el) => (
              <PhoneInput
                number={number}
                setNumber={setNumber}
                style={{
                  number: " !bg-[#e5e5e5] p-3 border-0 outline-none",
                  code: " !bg-[#e5e5e5] p-3 border-0 outline-none",
                }}
                key={el}
              />
            ))}
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="email">
            <strong>Enter email address</strong>
          </label>
          {booking.persons &&
            Array.from({ length: booking.persons }, (v, i) => i).map((el) => (
              <input
                type={"email"}
                className="bg-[#e5e5e5] p-3 border-0 outline-none"
                placeholder="Email address"
                key={el}
              />
            ))}
        </div>
      </div>

      <div className="p-4 bg-[#FFD03766] bg-opacity-40">
        Please ensure your contact details are correct
      </div>

      <div className="py-2">
        <h1 className="capitalize text-2xl font-semibold !w-full">
          Select a type of package
        </h1>
      </div>
      {["regular", "VIP"].map((item, index) => (
        <RadioSelect
          value={item}
          key={index}
          selected={tourPackage === item}
          select={() => setTourPackage(item)}
        />
      ))}

      {/* continue to select agent */}
      <div className="max-w-screen-sm w-full self-center pt-20">
        <Btn
          className={`flex justify-center items-center text-[white] w-full rounded-3xl !py-4 !px-3 gap-10 transition-all duration-500  ${
            "bg-[#1F66D0] "
            // number.length && email ? " bg-[#1F66D0] " : "bg-[#c4c4c4]"
          }`}
          type="button"
          onClick={() => props.setStep("preview")}
          // disabled={!number.length || !email}
        >
          <span className="text-lg font-semibold">Continue</span>

          <HiChevronRight fontSize={"1.8rem"} className="" />
        </Btn>
      </div>
    </div>
  );
};

export default OngoingTourPackage;
