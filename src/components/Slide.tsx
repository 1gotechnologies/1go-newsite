import React, { ReactFragment } from "react";

const Slide = () => {
  return (
    <div className="flex overflow-x-auto gap-3 md:gap-6 slide">
      <slot />
    </div>
  );
};

export default Slide;
