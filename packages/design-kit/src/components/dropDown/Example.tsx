import { Button } from "../button/Button";
import {
  DropDownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
} from "./DropDown";

const DropDownExample = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>드롭다운 열기</Button>
      </DropdownMenuTrigger>
      <DropDownMenuContent>test</DropDownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownExample;
