import React, {
  createRef,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";

const CarouselComponent: React.FC<{
  children: ReactElement[];
}> = (props) => {
  const carousel = createRef<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState(0);

  const timer = useRef<string | number | NodeJS.Timer | undefined>();

  const loop = () => {
    setPrevious(active);
    props.children.length > 1
      ? setActive(
          active < 0 ||
            active + 2 > props.children.length ||
            active > props.children.length
            ? 0
            : active + 1
        )
      : setActive(0);
  };

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(loop, 5000);
  }, [active]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className={`h-full w-full carousel`} ref={carousel}>
        {props.children.map((child, i) => (
          <div
            className={` transition-all duration-700 w-full h-full absolute 
            ${props.children.indexOf(child) !== active ? "opacity-0 " : " "}
            ${
              props.children.indexOf(child) === previous && previous >= active
                ? "!left-[100vw]"
                : props.children.indexOf(child) === previous &&
                  previous <= active
                ? "!right-[100vw]"
                : " left-0 right-0"
            }   
              `}
            key={i}
          >
            {child}
          </div>
        ))}
      </div>

      <div className="indicators flex items-center justify-center gap-3 absolute w-full bottom-0 py-2">
        {Array.from({ length: props.children.length }, (v, i) => i).map(
          (el) => (
            <button
              key={el}
              className={`rounded-full h-3 w-3 block transition-all outline-none border-0 duration-300 cursor-pointer bg-[#d9d9d9] ${
                active === el ? "!bg-black" : ""
              }
              }`}
              onClick={() => {
                if (timer.current) {
                  clearInterval(timer.current);
                  timer.current = undefined;
                }
                setPrevious(active);
                setActive(el);
              }}
            ></button>
          )
        )}
      </div>
    </div>
  );
};

export default CarouselComponent;
