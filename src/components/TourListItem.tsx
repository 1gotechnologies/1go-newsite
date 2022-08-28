import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Avatar from "./Avatar";

import { DateTime, Duration } from "luxon";
import { RiArrowRightSLine } from "react-icons/ri";
import { faker } from "@faker-js/faker";

interface Props {
  duration: string;
  image?: string;
  title: string;
  for: "home" | "bucket";
}

const ListItem: React.FC<Props> = (props) => {
  return (
    <div className="border-[##ACAAAA] rounded-3xl bg-inherit border border-1 shadow-md flex items-center gap-2 pr-3">
      <div
        style={{
          backgroundImage: `url(${
            props.image ?? faker.image.imageUrl(undefined, undefined, "place")
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="min-w-[100px] md:w-[30%] !min-h-[75px] md:!min-h-[90px] !bg-slate-500 rounded-l-3xl"
      ></div>
      <div className="grow w-2 flex flex-col gap-1">
        <h5 className="text-base font-medium truncate">{props.title}</h5>
        <small className="font-light truncate">{props.duration}</small>
      </div>
      {props.for === "bucket" && (
        <AiFillPlusCircle
          className="text-[#1F66D0] !min-w-[3rem]"
          size={"3rem"}
        />
      )}

      {props.for === "home" && (
        <RiArrowRightSLine
          className="text-[#ACAAAA] !min-w-[3rem]"
          size={"2rem"}
        />
      )}
    </div>
  );
};

export default ListItem;
