// CheckboxWithImage.tsx
import React, { ChangeEvent, useState } from "react";

interface RoundCheckboxProps {
  value: string;
  name: string;
  checked: boolean; // 체크 상태를 prop으로 받음
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // onChange 이벤트 핸들러를 prop으로 받음
}

export default function RoundCheckbox({
  checked,
  onChange,
  name,
  value,
}: RoundCheckboxProps) {
  // const [isChecked, setIsChecked] = useState(false);
  const checkedImage = "/checkImage.svg";
  const uncheckedImage = "/uncheckImage.svg";

  return (
    <label className="flex flex-col justify-center mr-2">
      <input
        name={name}
        value={value}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mb-4 sr-only peer"
      />
      <img
        src={checked ? checkedImage : uncheckedImage}
        alt="Checkbox Image"
        className="w-5 h-5 object-cover"
      />
    </label>
  );
}
