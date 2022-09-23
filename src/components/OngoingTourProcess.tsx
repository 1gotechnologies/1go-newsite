import { Btn } from "./Styled";
import { BiArrowBack } from "react-icons/bi";
import OngoingTourAgent from "./OngoingTourAgent";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OngoingTourCategory from "./OngoingTourCategory";
import OngoingTourMultiplePersons from "./OngoingTourMultiplePersons";
import useBookingStore from "../stores/booking";
import OngoingTourPassport from "./OngoingTourPassport";
import OngoingTourPackage from "./OngoingTourPackage";
import OngoingTourSummary from "./OngoingTourSummary";

const OngoingTourProcess = () => {
  const [step, setStep] = useState<string>("start");
  const navigate = useNavigate();
  const booking = useBookingStore();
  const { id } = useParams();
  const backOne = () => {
    step === "category"
      ? setStep("start")
      : step === "documents" && booking.category?.toLowerCase() !== "m"
      ? setStep("category")
      : step === "documents" && booking.category?.toLowerCase() === "m"
      ? setStep("persons")
      : step === "persons"
      ? setStep("category")
      : step === "packages"
      ? setStep("documents")
      : step === "summary"
      ? setStep("packages")
      : step === "finish"
      ? setStep("summary")
      : navigate(-1);
  };
  const goBack = () => {
    backOne();
  };

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [step]);

  useEffect(() => {
    booking.tourId = id;
  }, [id]);

  return (
    <>
      <Btn
        onClick={goBack}
        className="fixed top-7 left-3 md:sticky md:top-16 md:left-0 bg-inherit z-[9999999999] "
      >
        <BiArrowBack fontSize={"1.8rem"} />
      </Btn>{" "}
      {step === "start" ? (
        <OngoingTourAgent setStep={setStep} />
      ) : step === "category" ? (
        <OngoingTourCategory setStep={setStep} />
      ) : step === "persons" ? (
        <OngoingTourMultiplePersons setStep={setStep} />
      ) : step === "documents" ? (
        <OngoingTourPassport setStep={setStep} />
      ) : step === "packages" ? (
        <OngoingTourPackage setStep={setStep} />
      ) : step === "summary" ? (
        <OngoingTourSummary setStep={setStep} />
      ) : (
        ""
      )}
    </>
  );
};

export default OngoingTourProcess;
