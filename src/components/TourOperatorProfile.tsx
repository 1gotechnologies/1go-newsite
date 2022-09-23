import React, { useEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import { FaQuestionCircle } from "react-icons/fa";

const OngoingTourIndex = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const fact = faker.lorem.sentence();
  const media = `https://api.pexels.com/videos/`;
  const { id } = useParams();
  const tourLocation = faker.address.country();
  const snippet = faker.lorem.sentence();
  const [active, setActive] = useState<number>();
  const [foods, setFoods] = useState<
    {
      images: string[];
      dish: string;
      description: string;
    }[]
  >([]);
  const [places, setPlaces] = useState<
    {
      images: string[];
      place: string;
      description: string;
    }[]
  >([]);
  const [open, setOpen] = useState<"foods" | "places">();

  useEffect(() => {
    const totalFoods = Number(faker.random.numeric());
    const totalPlaces = Number(faker.random.numeric());

    setFoods(
      Array.from({ length: totalFoods }, (v, i) => i).map((el) => {
        return {
          images: Array.from({ length: totalFoods }, (v, i) => i).map((el) =>
            faker.image.food()
          ),
          dish: faker.random.words(),
          description: faker.lorem.paragraph(),
        };
      })
    );

    setPlaces(
      Array.from({ length: totalFoods }, (v, i) => i).map((el) => {
        return {
          images: Array.from({ length: totalFoods }, (v, i) => i).map((el) =>
            faker.image.city()
          ),
          place: faker.address.city(),
          description: faker.lorem.paragraph(),
        };
      })
    );
  }, []);

  return (
    <>
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

        <div className="flex flex-col gap-4"></div>

        {/* continue to select agent */}
      </div>
    </>
  );
};

export default OngoingTourIndex;
function useParams(): { id: any } {
  throw new Error("Function not implemented.");
}
