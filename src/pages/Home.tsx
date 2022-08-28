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
  const [agency, setAgency] = useState("STATSPIZZA CONSULTS LTD");
  const [openSearch, setOpenSearch] = useState(false);

  const ongoing = {
    image: faker.image.imageUrl(undefined, undefined, "house"),
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
          <div
            style={{
              backgroundImage: `url(${ongoing.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className=" min-h-[250px] md:!min-h-[300px] p-5 flex items-end bg-slate-800"
          >
            <div className="flex justify-between items-center w-full">
              <h5 className="text-[white] max-w-[80%] md:max-w-[60%]">
                Experience the 2022 world cup and the beauty of Qatar
              </h5>
              <HiChevronRight fontSize={"1.8rem"} className="text-[white]" />
            </div>
          </div>
        </section>

        {/* upcoming tour */}
        <section>
          <h5 className="text-base pb-3">Upcoming tour</h5>
          <div className="flex flex-wrap gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "ui"].map((el, index) => (
              <div className="w-full md:w-[45%] grow" key={index}>
                <TourListItem
                  title={faker.address.cityName()}
                  for={"home"}
                  duration={`${faker.date.future().getDay()} - ${faker.date
                    .future()
                    .getDay()} ${DateTime.fromISO(
                    faker.date.future().toISOString()
                  ).toFormat("LLLL")}`}
                  image={faker.image.imageUrl()}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
