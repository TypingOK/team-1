"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "design-kit";
const FooterFamilySite = () => {
  return (
    <Select>
      <SelectTrigger className="w-[12rem] placeholder-neutral-0 rounded-[10px] text-neutral-0 flex justify-center items-center h-10">
        <SelectValue className="" placeholder="Family Site" />
        <SelectIcon className="h-full flex items-center ml-auto">
          <img src="/header/down.svg" alt="선택 화살표" />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent className="w-[12rem] text-neutral-0">
        <SelectGroup>
          <SelectItem value="test">4</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FooterFamilySite;
