import React from "react";
import CarouselComponent from "./CarouselComponent";
const OngoingTourFoodPlace: React.FC<{
  title: string;
  images: string[];
  descrition: string;
}> = (props) => {
  return (
    <>
      <div className="h-[320px] overflow-hidden top-5 px-3 pb-5">
        <CarouselComponent
          children={props.images.map((image, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className={"w-full h-full bg-slate-500"}
            />
          ))}
        />
      </div>
      <h3 className="text-2xl font-semibold my-5 px-5">{props.title}</h3>
      <div className="px-5 mt-3 overflow-y-auto">
        <div>{props.descrition}</div>
      </div>
    </>
  );
};

export default OngoingTourFoodPlace;
