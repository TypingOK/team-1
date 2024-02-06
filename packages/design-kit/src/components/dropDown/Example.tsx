import { Button } from "../button/Button";
import {
  DropDownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
} from "./DropDown";
// Dropdown은 사용되지 않습니다. 만약 여러 항목 중 하나만 선택해야하는 경우 Select를 사용하세요
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
