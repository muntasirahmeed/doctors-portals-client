import React from "react";

const Spinner = () => {
  return (
    <div class="flex items-center justify-center h-[95vh] ">
      <div class="w-16 h-16 border-b-4 border-secondary rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
