import React, { createRef, ReactElement, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Btn } from "./Styled";

const CarouselPageComponent: React.FC<{
  children: ReactElement[];
  isOpen?: boolean;
  active?: number;
  setIsOpen: (val?: boolean) => any;
}> = (props) => {
  const carousel = createRef<HTMLDivElement>();
  const [active, setActive] = useState(props.active ?? 0);
  const [previous, setPrevious] = useState<number>(0);
  const [isDown, setIsDown] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">();

  // const click: MouseEventHandler = (e) => {
  //   setIsDown(true);
  // };

  // const move: MouseEventHandler = (e) => {
  //   if (!isDown) return;

  //   e.pageX < 100
  //     ? changeActive("left")
  //     : e.pageX > 100
  //     ? changeActive("right")
  //     : undefined;
  // };

  const changeActive = (val: "left" | "right") => {
    setPrevious(active);
    val === "left"
      ? setActive(active <= 0 ? props.children.length - 1 : active - 1)
      : setActive(active >= props.children.length - 1 ? 0 : active + 1);
    setDirection(val);
  };

  useEffect(() => {
    setActive(props.active ?? 0);
    setPrevious(active - 1);
  }, [props.active]);

  return (
    <div
      className={`w-screen fixed overflow-x-hidden top-0 left-0 z-[99999999] bg-[#FCFCFC] transition-all duration-500 ${
        props.isOpen ? "h-screen opacity-100" : "h-0 opacity-0"
      }`}
    >
      <div className="absolute top-0 left-0 h-full w-full overflow-y-auto bg-inherit">
        <div className="sticky top-0 z-50 bg-inherit ">
          <div className="container max-w-screen-lg py-2 px-3 flex justify-end items-center ">
            <Btn
              className={`rounded-full flex items-center justify-center !h-10 !w-10 transition-all duration-500  bg-[#e5e5e5] z-50`}
              onClick={() => props.setIsOpen(false)}
            >
              <CgClose fontSize={"1.8rem"} />
            </Btn>
          </div>
        </div>

        <div
          className={`absolute min-h-full w-full overflow-x-hidden`}
          ref={carousel}
          // onMouseDown={(e) => click(e)}
          // onMouseMove={(e) => move(e)}
          // onMouseLeave={() => setIsDown(false)}
          // onMouseUp={() => setIsDown(false)}
        >
          {props.children.map((child, i) => (
            <div
              className={` transition-all duration-1000 w-full min-h-full pb-20 absolute !container !max-w-screen-lg opacity-0 
               ${
                 props.children.indexOf(child) !== active
                   ? direction === "left"
                     ? "left-[100vw]"
                     : "right-[100vw]"
                   : " left-0 right-0 opacity-100"
               } 
               `}
              key={i}
            >
              {child}
            </div>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 z-50 bg-inherit w-full">
          <div className="indicators flex items-center justify-around gap-3 p-2 container max-w-screen-lg z-50">
            <Btn
              className={`rounded-full !h-12 !w-12 bg-[#d9d9d9] flex items-center justify-center`}
              onClick={() => changeActive("left")}
            >
              <HiChevronLeft fontSize={"1.8rem"} />
            </Btn>
            <Btn
              className={`rounded-full !h-12 !w-12 bg-[#d9d9d9] flex items-center justify-center`}
              onClick={() => changeActive("right")}
            >
              <HiChevronRight fontSize={"1.8rem"} />
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPageComponent;
