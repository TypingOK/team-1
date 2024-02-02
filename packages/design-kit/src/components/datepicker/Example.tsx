import { useState } from "react";
import { DatePicker } from "./DatePicker";

const DataPickerExample = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <div className="w-full flex justify-center">
      <DatePicker
        startDate={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
    </div>
  );
};

export default DataPickerExample;
