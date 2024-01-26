import { Button } from "@/components/button/Button";
import { Badge } from "./components/badge/Badge";

import { useEffect, useState } from "react";
import CarouselExample from "./components/swiper/example";

function App() {
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
    </>
  );
}

export default App;
