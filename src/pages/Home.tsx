import MainLayout from "../layout/MainLayout";
import { useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import TourListItem from "../components/TourListItem";
import { DateTime } from "luxon";
import { backend } from "../utils/apis";

export interface TourItemI {
  agency: number;
  description: string;
  end_date: Date | null;
  id: number;
  image?: string[] | null;
  location: string;
  name: string;
  start_date: Date | null;
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const getAllTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${backend}api/tours/`);
      setLoading(false);
      if (response.ok) {
        const data = await response.json();
        setOngoing(data);
        setUpcoming(data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);

      if (!upcoming?.length) {
        const data = Array.from(
          { length: Number(faker.random.numeric()) },
          (v, k) => k
        ).map((el) => {
          return {
            agency: Number(faker.random.numeric()),
            description: faker.lorem.paragraphs(),
            end_date: faker.date.future(),
            id: Number(faker.random.numeric()),
            image: [faker.image.business()],
            location: faker.address.city(),
            name: faker.address.cityName(),
            start_date: faker.date.recent(),
          };
        });
        setUpcoming(data);
      }
    }
  };

  const [ongoing, setOngoing] = useState<TourItemI>();
  const [upcoming, setUpcoming] = useState<TourItemI[]>();
  // {
  //   image: faker.image.imageUrl(undefined, undefined, "place"),
  //   id: faker.database.mongodbObjectId(),
  // };

  useEffect(() => {
    getAllTours();
  }, []);

  return (
    <MainLayout title="Dashboard">
      <div className="flex flex-col gap-10">
        {/* ungoing tour */}
        <section>
          <h5 className="text-base pb-3">Ongoing tour</h5>
          <Link
            style={{
              backgroundImage: `url(${
                ongoing?.image ?? faker.image.business()
              })`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            to={`/ongoing-tour/${
              ongoing?.id ?? faker.database.mongodbObjectId()
            }`}
            className=" block min-h-[250px] md:!min-h-[400px] bg-slate-800 relative"
          >
            <div className="bg-slate-900 absolute bg-opacity-20 w-full h-full top-0 left-0 p-5 flex flex-col justify-end text-left">
              <div className="flex justify-between items-center w-full">
                <h5
                  className="text-[white] max-w-[80%] md:max-w-[60%] font-medium truncate max-h-[75px]"
                  title={
                    ongoing?.description ??
                    "Experience the 2022 world cup and the beauty of Qatar"
                  }
                >
                  {ongoing?.description ??
                    "Experience the 2022 world cup and the beauty of Qatar"}
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
            {loading && (
              <div className="w-full overflow-x-hidden overflow-y-visible">
                <h2 className=" animate-pulse w-full text-center text-slate-700">
                  {" "}
                  Loading...{" "}
                </h2>
              </div>
            )}
            {upcoming?.map((el, index) => (
              <Link
                className="w-full md:w-[45%] md:max-w-[50%] grow"
                key={index}
                to={`/upcoming-tour/${el.id}`}
              >
                <TourListItem
                  title={el.name}
                  for={"home"}
                  duration={`${el.start_date} - ${el.end_date} ${
                    typeof el.end_date === "string"
                      ? DateTime.fromISO(
                          el.end_date ?? faker.date.future().toISOString()
                        ).toFormat("LLLL")
                      : DateTime.fromISO(
                          faker.date.future().toISOString()
                        ).toFormat("LLLL")
                  }`}
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
