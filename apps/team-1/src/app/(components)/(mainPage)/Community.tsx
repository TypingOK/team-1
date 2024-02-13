"use client";

import { Badge } from "design-kit";

const Community = () => {
  return (
    <>
      <div className="rounded-[10px] flex flex-col border p-4 mr-5 border-stroke-10 w-[333px] h-[251px]">
        <div className="font-semibold text-xl mt-1 mb-2 text-neutral-90">
          카카오 겨울 인턴십 문제 토론방
        </div>
        <div className="text-[#475467]">
          파이썬 17, 20번 case만 틀리는데 같이 풀어요. 반례 설명해주실 분
          들어와주세요
        </div>
        <div className="text-neutral-40 text-sm mt-4">10분 전</div>
        <div className="flex w-full mt-auto">
          <Badge variant="outlineBrand">백엔드</Badge>
        </div>
      </div>
      <div className="rounded-[10px] flex flex-col border p-4 mr-5 border-stroke-10 w-[333px] h-[251px]">
        <div className="font-semibold text-xl mt-1 mb-2 text-neutral-90">
          프로그래밍과 데이터 in Python
        </div>
        <div className="text-[#475467]">
          웹 개발, 데이터 분석, 업무 자동화의 첫걸음! 파이썬 기본기 다지기하는
          방입니다 ^^<br></br>
          초보끼리 화이팅 해요
        </div>
        <div className="text-neutral-40 text-sm mt-4">14분 전</div>
        <div className="flex w-full mt-auto">
          <Badge variant="outlineBrand" className="mr-2">
            백엔드
          </Badge>
          <Badge variant="outlineBlue">프론트엔드</Badge>
        </div>
      </div>
      <div className="rounded-[10px] flex flex-col border p-4 border-stroke-10 w-[333px] h-[251px]">
        <div className="font-semibold text-xl mt-1 mb-2 text-neutral-90">
          Databinding 사용법
        </div>
        <div className="text-[#475467]">
          DI, AAC, Jetpack 사용하는 안드로이드 개발자 분들과 함께 토론하는
          채팅방입니다. 저희는 신입, 경력자 모두 환영합니다
        </div>
        <div className="text-neutral-40 text-sm mt-4">32분 전</div>
        <div className="flex w-full mt-auto">
          <Badge variant="outlineBrand" className="mr-2">
            백엔드
          </Badge>
          <Badge variant="outlineGreen">Android</Badge>
        </div>
      </div>
    </>
  );
};

export default Community;
