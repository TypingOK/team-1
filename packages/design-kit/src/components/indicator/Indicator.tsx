import React from "react";

const Indicator = ({
  blue = false,
}: React.ComponentProps<`img`> & { blue?: boolean }) => {
  if (blue) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        className="rounded-full"
      >
        <rect width="10" height="10" rx="5" fill="#0059FF" />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        className="rounded-full"
      >
        <rect width="10" height="10" rx="5" fill="#E6E6E6" />
      </svg>
    );
  }
};

export default Indicator;
