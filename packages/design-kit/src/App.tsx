import { Button } from "@/components/button/Button";

import CarouselExample from "@/components/swiper/Example";
import PaginationExample from "./components/pagination/Example";
// import DropDownExample from "./components/dropDown/Example";
import SelectExample from "./components/select/Example";
import DataPickerExample from "./components/datepicker/Example";
import CarouselExampleRightSection from "./components/swiper/ExampleRightSection";
import HeroImageExample from "./components/card/heroImage/HeroImageExample";
import MyCardExample from "./components/card/myCard/Example";
import TabExample from "./components/tab/Example";
import BadgeExample from "./components/badge/Example";
import ButtonExample from "./components/button/Example";
import TextAreaExample from "./components/textArea/Example";
import InputExample from "./components/input/Example";
import ModalExample from "./components/modal/Example";

function App() {
  return (
    <>
      <div>
        <ModalExample />
      </div>
      <div>
        <TabExample />
      </div>
      <div>
        <InputExample />
      </div>
      <div>
        <TextAreaExample />
      </div>
      <div>
        <MyCardExample />
      </div>

      <>
        <ButtonExample />
      </>
      <>
        <BadgeExample />
      </>

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
