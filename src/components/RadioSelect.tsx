import React from "react";
import { MdCheckCircle } from "react-icons/md";

const RadioSelect: React.FC<{
  value: string | number;
  label?: string | number;
  selected: boolean;
  select: () => any;
}> = (props) => {
  return (
    <div
      className="border-[#ccc] border-y p-3 flex justify-between bg-white shadow-sm cursor-pointer"
      onClick={props.select}
    >
      <div className="font-normal capitalize grow">
        {props.label ?? props.value}
      </div>
      <div
        className={`rounded-full !w-[35px] !h-[35px] border-[#ACAAAA] relative p-0 transition-all flex items-center justify-center duration-300 ${
          props.selected ? "  " : " border-2 "
        }`}
      >
        <MdCheckCircle
          className={`transition-all duration-500 text-[#1F66D0] !w-[37px] !h-[37px]  ${
            props.selected ? " scale-100 " : " scale-0 rotate-180 duration-75"
          }`}
        />
      </div>
    </div>
  );
};

export default RadioSelect;
