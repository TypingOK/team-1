import { Button } from "@/components/button/Button";
import { Badge } from "./components/badge/Badge";

import CarouselExample from "@/components/swiper/Example";
import PaginationExample from "./components/pagination/Example";
// import DropDownExample from "./components/dropDown/Example";
import SelectExample from "./components/select/Example";

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
      <div>
        <PaginationExample />
      </div>
      
      <div className="w-[22rem] flex justify-center">
        {/* <DropDownExample /> */}
        <SelectExample />
      </div>
    </>
  );
}

export default App;
