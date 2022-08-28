import React from "react";
import { Btn } from "./Styled";

const BucketListItem: React.FC<{ id: string | number; title: string }> = (
  props
) => {
  return (
    <div className="p-3 flex justify-between shadow-md rounded-sm gap-2 bg-inherit  border-[##ACAAAA] border">
      <h5 className="grow truncate">{props.title}</h5>
      <Btn className="bg-[#D9D9D9] rounded-full min-w-[75px] text-sm">
        Remove
      </Btn>
    </div>
  );
};

export default BucketListItem;
