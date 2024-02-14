import { Input } from "design-kit";
import { useState } from "react";

const FollowSearching = () => {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative flex flex-row-reverse">
      <Input
        variant="small"
        border="full"
        className="w-[222px] h-[40px] rounded-[20px] pl-[30px] border-stroke-10"
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        onChange={handleChange}
        value={inputValue}
      />
      {!isInputFocused && inputValue === "" && (
        <div className="absolute right-[39px] top-[9px] flex gap-[15px]">
          <img src="/icons/mypage/search.svg" alt="search icon" />
          <span className="text-[16px] font-normal text-neutral-50">
            검색어를 입력하세요.
          </span>
        </div>
      )}
    </div>
  );
};

export default FollowSearching;
