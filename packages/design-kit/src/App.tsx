import { Button } from "@/components/button/Button";
import { Badge } from "./components/badge/Badge";

import CarouselExample from "@/components/swiper/Example";
import {
  Pagination,
  PaginationNumber,
  PaginationNextButton,
  PaginationPreviousButton,
  PaginationFastForwardButton,
  PaginationRewindButton,
  PaginationDot,
} from "./components/pagination/Pagination";
import { useState } from "react";

function App() {
  const [current, setCurrent] = useState<number>(3);
  const currentHandler = () => {
    if (current === 3) setCurrent(1);
    else setCurrent(3);
  };
  return (
    <>
      <button className="text-2xl">test</button>
      <Button variant={"primary"} className="text-5xl">
        버튼
      </Button>
      <Badge variant={"primary"}>test</Badge>
      <div className="w-full flex justify-center">
        <CarouselExample />
      </div>
      <div>
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
      </div>
    </>
  );
}

export default App;
