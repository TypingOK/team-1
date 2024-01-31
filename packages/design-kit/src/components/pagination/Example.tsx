import {
  Pagination,
  PaginationNumber,
  PaginationNextButton,
  PaginationPreviousButton,
  PaginationFastForwardButton,
  PaginationRewindButton,
  PaginationDot,
} from "@/components/pagination/Pagination";
import { useState } from "react";

const PaginationExample = () => {
  const [current, setCurrent] = useState<number>(3);
  const currentHandler = () => {
    if (current === 3) setCurrent(1);
    else setCurrent(3);
  };
  return (
    <Pagination>
      <PaginationRewindButton
        onClick={() => {
          setCurrent(1);
        }}
      />
      <PaginationPreviousButton />
      <PaginationNumber isActive={current === 1} onClick={currentHandler}>
        1
      </PaginationNumber>
      <PaginationDot />
      <PaginationNumber onClick={currentHandler}>2</PaginationNumber>
      <PaginationNumber isActive={current === 3} onClick={currentHandler}>
        3
      </PaginationNumber>
      <PaginationDot />
      <PaginationNumber isActive={current === 4} onClick={currentHandler}>
        4
      </PaginationNumber>
      <PaginationNextButton />
      <PaginationFastForwardButton
        onClick={() => {
          setCurrent(4);
        }}
      />
    </Pagination>
  );
};

export default PaginationExample;
