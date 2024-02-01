import { Button } from "@/components/button/Button";
import { Badge } from "./components/badge/Badge";

import CarouselExample from "@/components/swiper/Example";
import PaginationExample from "./components/pagination/Example";
// import DropDownExample from "./components/dropDown/Example";
import SelectExample from "./components/select/Example";
import DataPickerExample from "./components/datepicker/Example";
import CarouselExampleRightSection from "./components/swiper/ExampleRightSection";
import HeroImageExample from "./components/card/heroImage/HeroImageExample";
import MyCardExample from "./components/card/myCard/Example";
import { Input } from "./components/input/Input";

function App() {
  return (
    <>
      <div>
        <Input className="border-b-system-warning" />
      </div>
      <div>
        <MyCardExample />
      </div>

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
      <div className="w-full justify-center flex">
        <HeroImageExample />
      </div>
      <div>
        <DataPickerExample />
      </div>
    </>
  );
}

export default App;
