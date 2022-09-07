import React, {
  createRef,
  MouseEventHandler,
  ReactFragment,
  useEffect,
  useState,
} from "react";

const CarouselComponent: React.FC<{
  children: ReactFragment[];
}> = (props) => {
  const carousel = createRef<HTMLDivElement>();
  const [active, setActive] = useState(0);

  return (
    <div className={`flex overflow-x-auto gap-3 md:gap-6`} ref={carousel}>
      {props.children.map((child) => child)}
    </div>
  );
};

export default CarouselComponent;
