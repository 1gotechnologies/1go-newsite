import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Btn } from "./Styled";

export interface Props {
  label: React.ReactElement;
  content: React.ReactElement;
  direction?: "down" | "up";
}

const Dropdown: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShow(false);
  }, [location]);

  const reveal = () => setShow(!show);

  return (
    <div className="flex flex-col w-full transition-all duration-500 relative !h-fit">
      <div className="dropdown-label whitespace-nowrap" onClick={reveal}>
        {props.label}
      </div>
      <div
        className={`dropdown-content z-[49] bottom-[-50%] w-full relative min-w-fit transition-all duration-500 ${
          show ? "!scale-100" : " !max-h-0 !scale-0"
        } ${props.direction === "up" ? " absolute bottom-4 " : " "}`}
      >
        {props.content}
      </div>
    </div>
  );
};

export default Dropdown;
