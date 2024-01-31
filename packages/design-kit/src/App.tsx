import { Button } from "@/components/button/Button";
import { Badge } from "./components/badge/Badge";

import CarouselExample from "@/components/swiper/Example";
import PaginationExample from "./components/pagination/Example";
// import DropDownExample from "./components/dropDown/Example";
import SelectExample from "./components/select/Example";
import DataPickerExample from "./components/datepicker/Example";
import Indicator from "./components/indicator/Indicator";
import CarouselExampleRightSection from "./components/swiper/ExampleRightSection";

function App() {
  return (
    <>
      <button className="text-2xl">test</button>
      <Button variant={"primary"} popupSize={"big"}>
        버튼
      </Button>
      <Badge variant={"outlineGreen"}>test</Badge>
      <Badge
        editMode={true}
        onClick={() => {
          console.log("test");
        }}
      >
        삭제 버튼
      </Badge>
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
      <div className="w-full justify-center flex">
        <CarouselExampleRightSection />
      </div>

      <div>
        <DataPickerExample />
      </div>
    </>
  );
}

export default App;
