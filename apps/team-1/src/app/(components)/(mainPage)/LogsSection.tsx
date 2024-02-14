import LogTabs from "@/components/logs/LogTabs";
import Image from "next/image";
import Link from "next/link";

const LogsSection = () => {
  return (
    <>
      <div className="w-full flex max-w-[1050px]">
        <h1 className="flex items-center text-neutral-90 font-semibold text-2xl w-full">
          우리의 로그 기록, 아티클{" "}
          <Image
            src="/folder.png"
            alt="폴더"
            width={34}
            height={34}
            className="ml-1"
          />
        </h1>
        <div className="w-28 h-10">
          <Link
            href="/logs?page=1"
            className="rounded-full h-full py-2 px-4 border font-semibold border-neutral-20 flex w-full items-center justify-center text-neutral-70"
          >
            <div className="mr-auto ">{`더 보기`} </div>
            {">"}
          </Link>
        </div>
      </div>
      <div className="w-full mt-10">
        <LogTabs />
      </div>
    </>
  );
};

export default LogsSection;
