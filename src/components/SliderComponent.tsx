import React, {
  createRef,
  MouseEventHandler,
  ReactFragment,
  useEffect,
  useState,
} from "react";

const SliderComponent: React.FC<{
  children: ReactFragment[] | ReactFragment;
}> = (props) => {
  const slider = createRef<HTMLDivElement>();
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const click: MouseEventHandler = (e) => {
    setIsDown(true);
    // @ts-ignore
    setStartX(e.pageX - slider.current?.offsetLeft);
    // @ts-ignore
    setScrollLeft(slider.current?.scrollLeft);
  };

  const move: MouseEventHandler = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - (slider.current?.offsetLeft ?? 0);
    const walk = (x - startX) * 2; //scroll-fast
    // @ts-ignore
    slider.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={`flex overflow-x-auto gap-3 md:gap-6 py-3 ${
        isDown ? " cursor-grabbing" : " cursor-grab"
      }`}
      ref={slider}
      onMouseDown={(e) => click(e)}
      onMouseMove={(e) => move(e)}
      onMouseLeave={() => setIsDown(false)}
      onMouseUp={() => setIsDown(false)}
    >
      {props.children}
    </div>
  );
};

export default SliderComponent;
