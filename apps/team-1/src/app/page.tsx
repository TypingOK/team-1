import ShortCut from "./(components)/(mainPage)/ShortCut";
import SwiperWrapper from "./(components)/(mainPage)/SwiperWrapper";
import LogsSection from "./(components)/(mainPage)/LogsSection";
import Image from "next/image";
import Link from "next/link";
import Community from "./(components)/(mainPage)/Community";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full min-h-screen">
      <section className="mt-10">
        <div className="text-3xl font-bold mb-4">
          당신의 이야기가<br></br>
          값진 경험이 됩니다.<br></br>
        </div>
        <div className="text-neutral-50">
          우리의 로그는 더 나은 세상을 만들어가는 여정의 출발점이자 도전의 기록
        </div>
      </section>
      <section className="w-full max-w-[1200px] h-96 mb-10">
        <SwiperWrapper />
      </section>
      <section className="mt-20">
        <ShortCut />
      </section>
      <section className="w-full flex flex-col items-center mt-20">
        <LogsSection />
      </section>
      <section className="w-full flex justify-center">
        <div className="w-full max-w-[1440px] relative h-80">
          <Image src="/Main.png" alt="메인 배너" fill />
        </div>
      </section>
      <section className="mt-[85px] w-full flex-col flex items-center">
        <div className="w-full flex max-w-[1050px] mb-11">
          <h1 className="flex items-center text-neutral-90 font-semibold text-2xl w-full">
            지금 HOT한 코드 토론방{" "}
            <Image
              src="/fire.png"
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
        <div className="flex mb-[80px]">
          <Community />
        </div>
      </section>
      <section className="w-full flex-col flex mb-32 items-center">
        <div className="w-full flex max-w-[1050px] mb-11">
          <h1 className="flex items-center text-neutral-90 font-semibold text-2xl w-full">
            지금 모집 중, 교육 프로그램{" "}
            <Image
              src="/eyes.png"
              alt="폴더"
              width={34}
              height={34}
              className="ml-1"
            />
          </h1>
        </div>
        <div className="w-full flex max-w-[1050px]">
          <div className="relative w-[510px] h-[181px] mr-5">
            <Image
              src="/leftBanner.png"
              alt="왼쪽 배너"
              fill
              className="rounded-[10px]"
            ></Image>
          </div>
          <div className="relative w-[510px] h-[181px]">
            <Image
              src="/rightBanner.png"
              alt="오른쪽 배너"
              fill
              className="rounded-[10px]"
            ></Image>
          </div>
        </div>
      </section>
    </main>
  );
}
