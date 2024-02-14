import { ReactNode } from "react";
import Header from "./Header";

const HeaderWrapper = () => {
  return (
    <div className="w-full flex flex-col items-center h-[8.25rem] border-b-neutral-5 border-b sticky -top-[2.875rem] z-[10000] bg-neutral-0">
      <div className="w-full flex justify-center h-[2.875rem] items-center bg-background-5">
        <nav className="flex h-full items-center w-full max-w-[1200px]">
          <div className="w-[107px] flex justify-center text-neutral-30 text-sm font-semibold">
            SFACFOLIO
          </div>
          <div className="border-r border-stroke-10 h-full"></div>
          <div className="w-[107px] flex justify-center items-center text-neutral-80 font-semibold text-sm bg-neutral-0 h-full">
            SFACLOG
          </div>
        </nav>
      </div>
      <div className="w-full max-w-[1200px] h-[5.375rem] bg-neutral-0 z-10">
        <Header />
      </div>
    </div>
  );
};

export default HeaderWrapper;
