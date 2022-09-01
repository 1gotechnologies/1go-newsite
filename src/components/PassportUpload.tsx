import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { Btn } from "./Styled";

const PassportUpload: React.FC<{ index: number | string }> = (props) => {
  const [fileName, setFileName] = useState<string>();
  const upload = () => {
    setFileName(`passport-${props.index}-select`);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
      <Dropdown
        label={
          <div
            className={`bg-[#e5e5e5] p-4 truncate cursor-pointer ${
              fileName?.length ? " text-green-600" : ""
            }`}
          >
            {fileName ?? "International passsport 1"}
          </div>
        }
        content={
          <div className="bg-white shadow  border-[##ACAAAA] border absolute bottom-8 w-full ">
            <div>
              <label
                htmlFor={`passport-${props.index}-select`}
                className="h-full w-full cursor-pointer block p-5"
              >
                Choose a photo
              </label>
              <input
                type="file"
                name={`passport-${props.index}-select`}
                id={`passport-${props.index}-select`}
                accept="image/*"
                hidden
              />
            </div>
          </div>
        }
      />

      <div className=" text-right">
        <Btn
          className="w-[170px] bg-[#1F66D0] text-white font-semibold !py-3 self-center my-3"
          onClick={upload}
          type="submit"
        >
          Upload
        </Btn>
      </div>
    </form>
  );
};

export default PassportUpload;
