import SwiperWrapper from "./(components)/(mainPage)/SwiperWrapper";

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
      <section className="w-full max-w-[1200px] h-96">
        <SwiperWrapper />
      </section>
    </main>
  );
}
