import { useState } from "react";
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
  const [directState, setDirectState] = useState<boolean>(false);

  return (
    <>
      {directState ? (
        <input></input>
      ) : (
        // select item들이 제대로 보이기 위해서 Select 상위에 충분한 값이 필요함 SelectTrigger, SelectItem보다 최소 2rem 이상.
        <Select
          // Select 태그에 value와 onValueChange를 사용할 수 있습니다. onValueChange의 경우 값이 바뀔 때 마다 실행됩니다.
          onValueChange={e => {
            console.log(e);
            if (e === "직접 입력") setDirectState(true);
          }}
        >
          <SelectTrigger className="w-80">
            <SelectValue placeholder="Text" />
            <SelectIcon className="h-full flex items-center ml-auto">
              <img src="Arrow/down.svg" alt="선택 화살표" />
            </SelectIcon>
          </SelectTrigger>
          <SelectContent className="w-80">
            <SelectGroup>
              <SelectItem value="test">4</SelectItem>
              <SelectItem value="asd">1</SelectItem>
              <SelectItem value="2">
                2asdasdasdasdasdasdasdasdasdasdasdasdasdas
              </SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="직접 입력">직접 입력</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    </>
  );
};

export default SelectExample;
