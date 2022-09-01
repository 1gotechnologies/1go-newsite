import styled from "styled-components";
import MainLayout from "../layout/MainLayout";
import { HiOutlineSearch } from "react-icons/hi";
import { FormEventHandler, useState } from "react";
import { Btn, OverlayShade } from "../components/Styled";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import TourListItem from "../components/TourListItem";
import { DateTime } from "luxon";

export default function Home() {
  const ongoing = {
    image: faker.image.imageUrl(undefined, undefined, "place"),
    id: faker.database.mongodbObjectId(),
  };

  const search: FormEventHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <MainLayout>
      <div className="flex flex-col gap-10">
        {/* ungoing tour */}
        <section>
          <h5 className="text-base pb-3">Ongoing tour</h5>
          <Link
            style={{
              backgroundImage: `url(${ongoing.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            to={`/ongoing-tour/${ongoing.id}`}
            className=" block min-h-[250px] md:!min-h-[400px] bg-slate-800 relative"
          >
            <div className="bg-slate-900 absolute bg-opacity-20 w-full h-full top-0 left-0 p-5 flex flex-col justify-end text-left">
              <div className="flex justify-between items-center w-full">
                <h5 className="text-[white] max-w-[80%] md:max-w-[60%] font-medium truncate max-h-[75px]">
                  Experience the 2022 world cup and the beauty of Qatar
                </h5>
                <HiChevronRight fontSize={"1.8rem"} className="text-[white]" />
              </div>
            </div>
          </Link>
        </section>

        {/* upcoming tour */}
        <section className="px-2 md:px-10">
          <h5 className="text-base pb-3">Upcoming tour</h5>
          <div className="flex flex-wrap gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "ui"].map((el, index) => (
              <Link
                className="w-full md:w-[45%] grow"
                key={index}
                to={`/upcoming-tour/${index}`}
              >
                <TourListItem
                  title={faker.address.cityName()}
                  for={"home"}
                  duration={`${faker.date.future().getDay()} - ${faker.date
                    .future()
                    .getDay()} ${DateTime.fromISO(
                    faker.date.future().toISOString()
                  ).toFormat("LLLL")}`}
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
