import { ReactNode } from "react";
import Header from "./Header";

const HeaderWrapper = () => {
  return (
    <div className="w-full flex flex-col items-center h-[8.25rem] border-b-neutral-5 border-b sticky -top-[2.875rem] z-[10000] bg-neutral-0">
      <div className="w-full flex justify-center h-[2.875rem] items-center bg-background-5">
        <nav className="flex h-full items-center w-full max-w-[1200px]">
          <div className="w-[107px] flex justify-center">SFACFOLIO</div>
          <div>|</div>
          <div className="w-[107px] flex justify-center">SFACLOG</div>
        </nav>
      </div>
      <div className="w-full max-w-[1200px] h-[5.375rem] bg-neutral-0 z-10">
        <Header />
      </div>
    </div>
  );
};

export default HeaderWrapper;
