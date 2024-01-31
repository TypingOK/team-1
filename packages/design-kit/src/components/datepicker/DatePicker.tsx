import DatePicker, { ReactDatePicker } from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import { cn } from "@/utils";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import "./style.css";

// export interface DateSelectorProps {
//   selected: Date | null;
//   startDate: Date | null;
//   endDate: Date | null;
//   ChangeDate: (date: [Date | null, Date | null]) => void;
//   dateFormat?: string;
// }

export type DateSelectorProps = React.ComponentProps<typeof ReactDatePicker>;

const DateSelector = ({
  className,
  selected,
  startDate,
  dateFormat = "yyyy.MM.dd",
  ...props
}: DateSelectorProps) => {
  return (
    <div className="flex  ">
      <DatePicker
        showPopperArrow={false}
        selected={startDate}
        className={cn(
          ` py-2 pl-3 rounded-[0.625rem] border border-neutral-20 text-sm bg-neutral-0`,
          className,
        )}
        locale={ko}
        disabledKeyboardNavigation
        {...props}
        renderCustomHeader={({
          date,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          decreaseMonth,
          increaseMonth,
        }) => {
          return (
            <div className="pb-4 flex justify-center bg-neutral-0 items-center w-full m-auto">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <img src="Arrow/previous.svg"></img>
              </button>
              <div className="mx-[1.25rem]">
                {getYear(date)}년 {[getMonth(date) + 1]}월
              </div>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <img src="Arrow/next.svg"></img>
              </button>
            </div>
          );
        }}
      ></DatePicker>
      <img src="Arrow/down.svg" className="relative right-5" alt="내리기" />
    </div>
  );
};

export { DateSelector as DatePicker };
