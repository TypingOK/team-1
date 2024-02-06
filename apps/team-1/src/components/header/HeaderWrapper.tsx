import { ReactNode } from "react";

const HeaderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex justify-center h-[5.375rem]">
      <div className="w-full max-w-[1200px]">{children}</div>
    </div>
  );
};

export default HeaderWrapper;
