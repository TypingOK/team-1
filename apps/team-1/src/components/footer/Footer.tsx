import Image from "next/image";
import FooterFamilySite from "./FooterFamilySite";

const Footer = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <div className="w-[463px] h-[178px] relative">
        <Image
          src="/logo.svg"
          alt="로고"
          width={260}
          height={42}
          className="mb-[20px]"
        />
        <div className="text-neutral-30 mb-[5px]">
          개인정보 처리 방침 | 서비스 이용약관 | 환불규정
        </div>
        <div className="text-neutral-30 mb-[10px]">
          연락처: 050-6683-1001 | 고객센터 : cs@sniperfactory.com
        </div>
        <div className="text-neutral-50 text-xs mb-[5px]">
          주소 : 서울특별시 강서구 마곡중앙로2로 11, 3층 305호 (마곡동, M밸리 W
          TOWERIII)
        </div>
        <div className="text-neutral-50 text-xs mb-[5px]">
          인사이드아웃 사회적 협동조합 | 고유번호 : 324-82-00580 | 이사장 :
          염민호 (와이엠에스닷코)
        </div>
        <div className="text-neutral-50 text-xs mb-[5px]">
          통신판매업 신고번호 : 2022-경기김포-3659
        </div>
      </div>
      <div className="h-full flex flex-col justify-between">
        <FooterFamilySite />
        <Image src="/header/icons.png" alt="아이콘들" width={135} height={35} className="ml-auto"/>
      </div>
    </div>
  );
};

export default Footer;
