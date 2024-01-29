import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

const SelectExample = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Text" />
        
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="test">test</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectExample;
