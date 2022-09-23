import MainLayout from "../layout/MainLayout";
import React, { useEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import ImageCard from "./ImageCard";
import { Link, useLocation, useParams } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import SliderComponent from "./SliderComponent";
import CarouselPageComponent from "./CarouselPageComponent";
import OngoingTourFoodPlace from "./OngoingTourFoodPlace";
import { Btn } from "./Styled";

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
      <div className=" flex flex-col gap-8 ">
        {" "}
        {/* snippet */}
        <div className=" font-light">{snippet}</div>
        {/* image */}
        <div className="">
          <video src={""} className="w-full bg-slate-500"></video>
        </div>
        {/* fact */}
        <div className="">
          <strong>Did you know that:</strong> {fact}
        </div>
        {/* places */}
        <div className="">
          <h5 className="pb-4">Places to visit in {tourLocation}</h5>
          <SliderComponent>
            {places.map((place, index) => (
              <Btn
                className="select-none"
                key={index}
                onClick={() => {
                  setIsOpen(true);
                  setOpen("places");
                  setActive(index);
                }}
              >
                <ImageCard
                  title={place.place}
                  caption={place.description}
                  image={place.images[0]}
                />
              </Btn>
            ))}
          </SliderComponent>
        </div>
        {/* foods */}
        <div className="">
          <h5 className="pb-4">Foods to enjoy in {tourLocation}</h5>
          <SliderComponent>
            {foods.map((food, index) => (
              <Btn
                className="select-none"
                key={index}
                onClick={() => {
                  setIsOpen(true);
                  setOpen("foods");
                  setActive(index);
                }}
              >
                <ImageCard
                  title={food.dish}
                  caption={food.description}
                  image={food.images[0]}
                />
              </Btn>
            ))}
          </SliderComponent>
        </div>
        {/* continue to select agent */}
        <div className="max-w-screen-sm w-full self-center">
          <Link
            to={"continue"}
            className="flex justify-center items-center text-[white] bg-[#1F66D0] rounded-3xl py-4 px-3 gap-10"
          >
            <span className="text-lg font-semibold">Continue</span>

            <HiChevronRight fontSize={"1.8rem"} className="" />
          </Link>
        </div>
      </div>
      <CarouselPageComponent
        children={
          open === "foods"
            ? foods?.map((food, i) => (
                <OngoingTourFoodPlace
                  title={food.dish}
                  descrition={food.description}
                  images={food.images}
                  key={i}
                />
              ))
            : places?.map((place, i) => (
                <OngoingTourFoodPlace
                  title={place.place}
                  descrition={place.description}
                  images={place.images}
                  key={i}
                />
              ))
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        active={active}
      />
    </>
  );
};

export default OngoingTourIndex;
