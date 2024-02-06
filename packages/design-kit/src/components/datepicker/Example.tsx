import { useState } from "react";
import { DatePicker } from "./DatePicker";

const DataPickerExample = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <div className="w-full flex justify-center">
      {/* 단순한 DatePicker입니다. 이렇게 작성하면 됩니다. onChange를 통해 선택한 경우에 callback 함수를 넣어 날짜 값을 바꿀 수 있도록 했습니다. */}
      <DatePicker
        startDate={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
    </div>
  );
};

export default DataPickerExample;
